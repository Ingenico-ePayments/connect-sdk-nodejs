import http = require("http");
import https = require("https");
import uuid = require("uuid");
import formData = require("form-data");
import obfuscate = require("../utils/obfuscate");
import headers = require("../utils/headers");
import { ConnectionCallback, Logger, MultipartFormDataObject, SdkContext } from "../model";

function handleResponse(res: http.IncomingMessage, context: SdkContext, logger: Logger, uuidString: string, cb: ConnectionCallback): void {
  if (context.isLoggingEnabled()) {
    let body = "";

    if (headers.isBinaryContent(res.headers["content-type"])) {
      body = "<binary content>";
    } else {
      res.setEncoding("utf8");
      res.on("data", chunk => {
        body += chunk;
      });
    }

    res.on("end", () => {
      if (context.isLoggingEnabled()) {
        // headers: case insensitive, body: case sensitive
        const obfuscatedHeaders = obfuscate.getObfuscated(res.headers, context, true);
        const obfuscatedBody = headers.isJSON(res.headers["content-type"]) ? obfuscate.getObfuscated(body, context, false) : body;
        logger("info", "Response from Message ID: " + uuidString + ", status: " + res.statusCode + ", headers: " + obfuscatedHeaders + ", body: " + obfuscatedBody);
      }
    });
  }

  cb(null, res);
}

function handleError(e: Error, context: SdkContext, logger: Logger, uuidString: string, cb: ConnectionCallback): void {
  if (context.isLoggingEnabled()) {
    logger("error", "Error for Message ID:" + uuidString + ", error: " + JSON.stringify(e));
  }
  cb(e, null);
}

export function sendJSON(options: https.RequestOptions, postData: object | undefined | null, context: SdkContext, cb: ConnectionCallback): void {
  const logger = context.getLogger();
  const uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    // headers: case insensitive, body: case sensitive
    const obfuscatedHeaders = obfuscate.getObfuscated(options.headers, context, true);
    const obfuscatedBody = obfuscate.getObfuscated(postData, context, false);
    logger("info", "Request with Message ID: " + uuidString + ", " + options.method + " to " + options.path + ", headers: " + obfuscatedHeaders + ", body: " + obfuscatedBody);
  }
  const h = options.protocol === "https:" ? https : http;
  const req = h.request(options, res => {
    handleResponse(res, context, logger, uuidString, cb);
  });
  req.on("error", e => {
    handleError(e, context, logger, uuidString, cb);
  });

  if (postData) {
    req.write(JSON.stringify(postData));
  }
  req.end();
}

export function sendMultipart(options: https.RequestOptions, postData: MultipartFormDataObject, boundary: string, context: SdkContext, cb: ConnectionCallback): void {
  const logger = context.getLogger();
  const uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    // headers: case insensitive
    const obfuscatedHeaders = obfuscate.getObfuscated(options.headers, context, true);
    logger("info", "Request with Message ID: " + uuidString + ", " + options.method + " to " + options.path + ", headers: " + obfuscatedHeaders + ", body: <binary data>");
  }
  const h = options.protocol === "https:" ? https : http;
  const req = h.request(options, res => {
    handleResponse(res, context, logger, uuidString, cb);
  });
  req.on("error", e => {
    handleError(e, context, logger, uuidString, cb);
  });

  const form = new formData();
  // overwrite getBoundary to use the provided boundary instead of letting the form generate one
  form.getBoundary = (): string => {
    return boundary;
  };
  if (postData) {
    for (const key in postData) {
      const item = postData[key];
      if (typeof item === "object") {
        if (!item.fileName) {
          cb(new Error(key + ": fileName is required"), null);
          return;
        }
        if (!item.contentType) {
          cb(new Error(key + ": contentType is required"), null);
          return;
        }
        if (!item.content) {
          cb(new Error(key + ": content is required"), null);
          return;
        }
        const opts: formData.AppendOptions = {
          filename: item.fileName,
          contentType: item.contentType
        };
        if (item.contentLength || item.contentLength === 0) {
          opts.knownLength = item.contentLength;
        }
        form.append(key, item.content, opts);
      } else if (typeof item !== "undefined") {
        form.append(key, item);
      }
    }
  }
  form.pipe(req);
}
