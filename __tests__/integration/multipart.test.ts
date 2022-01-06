/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Readable } from "stream";
import * as connectSdk from "../../src";
import * as communicator from "../../src/utils/communicator";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("../config.json");

connectSdk.init({
  host: "httpbin.org",
  scheme: "http",
  port: 80,
  enableLogging: config.enableLogging, // defaults to false
  apiKeyId: config.apiKeyId,
  secretApiKey: config.secretApiKey,
  integrator: "Integration tests"
});

jest.setTimeout(60 * 1000);

function toReadable(str: string): Readable {
  const result = new Readable();
  result.push(str);
  result.push(null);
  return result;
}

interface HttpBinResponse {
  form: { [key: string]: string | undefined };
  files: { [key: string]: string | undefined };
}

/**
 * @group integration
 */
describe("multipart", () => {
  test("POST", done => {
    const body = {
      value: "Hello World",
      file: {
        content: toReadable("This is the contents of a file"),
        fileName: "file.txt",
        contentType: "text/plain"
      }
    };

    communicator.multipart({
      method: "POST",
      modulePath: "/post",
      body: body,
      paymentContext: null,
      cb: (error, response) => {
        expect(error).toBeNull();

        expect(response).not.toBeNull();
        expect(response!.status).toBe(200);
        expect(response!.body).not.toBeNull();

        const responseBody = response!.body as HttpBinResponse;
        expect(responseBody.files).not.toBeNull();
        expect(responseBody.files.file).toBe("This is the contents of a file");
        expect(responseBody.form).not.toBeNull();
        expect(responseBody.form.value).toBe("Hello World");

        done();
      }
    });
  });

  test("PUT", done => {
    const body = {
      value: "Hello World",
      file: {
        content: toReadable("This is the contents of a file"),
        fileName: "file.txt",
        contentType: "text/plain"
      }
    };

    communicator.multipart({
      method: "PUT",
      modulePath: "/put",
      body: body,
      paymentContext: null,
      cb: (error, response) => {
        expect(error).toBeNull();

        expect(response).not.toBeNull();
        expect(response!.status).toBe(200);
        expect(response!.body).not.toBeNull();

        const responseBody = response!.body as HttpBinResponse;
        expect(responseBody.files).not.toBeNull();
        expect(responseBody.files.file).toBe("This is the contents of a file");
        expect(responseBody.form).not.toBeNull();
        expect(responseBody.form.value).toBe("Hello World");

        done();
      }
    });
  });
});
