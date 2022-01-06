/* eslint-disable @typescript-eslint/no-non-null-assertion */

import _ = require("lodash");
import http = require("http");
import https = require("https");
import headers = require("../utils/headers");
import connection = require("../utils/connection");
import sdkcontext = require("../utils/context");
import uuid = require("uuid");
import { Context, Header, JsonRequest, MultipartFormDataRequest, SdkCallback, SdkRequest } from "../model";

function prepareRequest(o: SdkRequest, context: Context, options: https.RequestOptions, contentType: string): void {
  const date = headers.date();
  let path = o.modulePath;
  if (o.paymentContext) {
    let separator = "?";
    for (const key in o.paymentContext) {
      if (key !== "extraHeaders" && key !== "idemPotence") {
        if (_.isArray(o.paymentContext[key])) {
          for (const value in o.paymentContext[key]) {
            path += separator + key + "=" + o.paymentContext[key][value];
            separator = "&";
          }
        } else {
          path += separator + key + "=" + o.paymentContext[key];
          separator = "&";
        }
      }
    }
  }
  const extraHeaders: Header[] = [];
  options.path = path;
  options.method = o.method;
  options.headers = options.headers || {};
  options.headers["Date"] = date;
  options.headers["Content-Type"] = contentType;
  if (o.paymentContext && o.paymentContext.extraHeaders) {
    for (let i = 0; i < o.paymentContext.extraHeaders.length; i++) {
      const header = o.paymentContext.extraHeaders[i];
      options.headers[header.key] = _.trim(header.value.replace(/\r?\n[\\s&&[^\r\n]]*/g, " "));
      extraHeaders.push(header);
    }
  }

  // add idemPotence header
  if (o.paymentContext && o.paymentContext.idemPotence) {
    const idemPotenceKey = o.paymentContext.idemPotence.key;
    const idemPotenceHeader = {
      key: "X-GCS-Idempotence-Key",
      value: idemPotenceKey
    };
    options.headers[idemPotenceHeader.key] = idemPotenceHeader.value;
    extraHeaders.push(idemPotenceHeader);
  }

  // add X-GCS-ServerMetaInfo
  const serverMetaInfo = headers.serverMetaInfo(sdkcontext);
  options.headers[serverMetaInfo.key] = serverMetaInfo.value;
  extraHeaders.push(serverMetaInfo);

  options.headers.Authorization = "GCS v1HMAC:" + context.apiKeyId + ":" + sdkcontext.getSignature(o.method, contentType, date, extraHeaders, options.path);
}

function handleResponse(error: Error | null, response: http.IncomingMessage | null, cb: SdkCallback): void {
  if (error) {
    cb(error, null);
  } else {
    const idempotenceRequestTimestamp = response!.headers["x-gcs-idempotence-request-timestamp"];
    if (idempotenceRequestTimestamp) {
      sdkcontext.setIdempotenceRequestTimestamp(idempotenceRequestTimestamp as string);
    }

    if (headers.isBinaryContent(response!.headers["content-type"])) {
      const statusCode = response!.statusCode!;
      cb(null, {
        status: statusCode,
        body: response,
        isSuccess: statusCode >= 200 && statusCode < 300,
        file: {
          contentType: response!.headers["content-type"]!,
          contentLength: headers.contentLength(response!.headers),
          filename: headers.dispositionFilename(response!.headers)
        }
      });
    } else {
      let body = "";

      response!.setEncoding("utf8");
      response!.on("data", chunk => {
        body += chunk;
      });
      response!.on("end", () => {
        const statusCode = response!.statusCode!;
        try {
          body = body ? JSON.parse(body) : null;
          cb(null, {
            status: statusCode,
            body: body,
            isSuccess: statusCode >= 200 && statusCode < 300
          });
        } catch (e) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const error = e as any;
          error.status = statusCode;
          error.body = body;
          cb(error, null);
        }
      });
    }
  }
}

export function json(o: JsonRequest): void {
  const context = sdkcontext.getContext();
  const options = _.merge({}, context.httpOptions);
  prepareRequest(o, context, options, "application/json");
  connection.sendJSON(options, o.body, sdkcontext, (error, response) => {
    handleResponse(error, response, o.cb);
  });
}

export function multipart(o: MultipartFormDataRequest): void {
  const context = sdkcontext.getContext();
  const options = _.merge({}, context.httpOptions);
  const boundary = uuid.v4();
  prepareRequest(o, context, options, "multipart/form-data; boundary=" + boundary);
  connection.sendMultipart(options, o.body, boundary, sdkcontext, (error, response) => {
    handleResponse(error, response, o.cb);
  });
}
