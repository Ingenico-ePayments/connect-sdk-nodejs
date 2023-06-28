/* eslint-disable @typescript-eslint/no-non-null-assertion */

import each from "jest-each";
import * as nock from "nock";
import { Readable } from "stream";
import * as connectSdk from "../../../src";
import * as communicator from "../../../src/utils/communicator";

/**
 * @group unit:communicator
 */
describe("communicator", () => {
  const testData = [
    [200, true],
    [404, false],
    [500, false]
  ];

  beforeAll(() => {
    connectSdk.init({
      host: "test",
      scheme: "http",
      port: 80,
      enableLogging: false,
      apiKeyId: "dummy",
      secretApiKey: "dummy",
      integrator: "dummy"
    });
  });

  each(testData).test("with JSON response with status %d", (status, isSuccess, done) => {
    nock("http://test")
      .get("/json")
      .reply(status, {
        id: 1
      });

    communicator.json({
      method: "GET",
      modulePath: "/json",
      cb: (error, response) => {
        expect(error).toBeNull();

        expect(response).not.toBeNull();
        expect(response!.status).toBe(status);
        expect(response!.body).toHaveProperty("id", 1);
        expect(response!.isSuccess).toBe(isSuccess);
        expect(response!.file).toBeUndefined();

        done();
      }
    });
  });

  each(testData).describe("with binary response with status %d", (status, isSuccess) => {
    test("with full headers", done => {
      const responseBody = "Test response";
      const contentLength = responseBody.length;
      const contentType = "application/octet-stream";
      const filename = "file.txt";

      nock("http://test")
        .get("/binary")
        .reply(status, responseBody, {
          "Content-Type": contentType,
          "Content-Length": contentLength.toString(),
          "Content-Disposition": `attachment; filename="${filename}"`
        });

      communicator.json({
        method: "GET",
        modulePath: "/binary",
        cb: (error, response) => {
          expect(error).toBeNull();

          expect(response).not.toBeNull();
          expect(response!.status).toBe(status);
          expect(response!.body).toBeInstanceOf(Readable);
          expect(response!.isSuccess).toBe(isSuccess);
          expect(response!.file).not.toBeUndefined();
          expect(response!.file!.contentType).toBe(contentType);
          expect(response!.file!.contentLength).toBe(contentLength);
          expect(response!.file!.filename).toBe(filename);

          const body = response!.body as Readable;
          let content = "";
          body.on("data", chunk => {
            content += chunk;
          });
          body.on("end", () => {
            expect(content).toBe(responseBody);

            done();
          });
        }
      });
    });
    test("with minimal headers", done => {
      const responseBody = "Test response";
      const contentType = "application/octet-stream";

      nock("http://test")
        .get("/binary")
        .reply(status, responseBody, {
          "Content-Type": contentType
        });

      communicator.json({
        method: "GET",
        modulePath: "/binary",
        cb: (error, response) => {
          expect(error).toBeNull();

          expect(response).not.toBeNull();
          expect(response!.status).toBe(status);
          expect(response!.body).toBeInstanceOf(Readable);
          expect(response!.isSuccess).toBe(isSuccess);
          expect(response!.file).not.toBeUndefined();
          expect(response!.file!.contentType).toBe(contentType);
          expect(response!.file!.contentLength).toBeNull();
          expect(response!.file!.filename).toBeNull();

          const body = response!.body as Readable;
          let content = "";
          body.on("data", chunk => {
            content += chunk;
          });
          body.on("end", () => {
            expect(content).toBe(responseBody);

            done();
          });
        }
      });
    });
  });

  test("with invalid JSON response", done => {
    const responseBody = "Non-JSON";
    nock("http://test")
      .get("/non-json")
      .reply(200, responseBody);

    communicator.json({
      method: "GET",
      modulePath: "/non-json",
      cb: (error, response) => {
        expect(error).not.toBeNull();
        expect(error!.status).toBe(200);
        expect(error!.body).toBe(responseBody);
        expect(error!.message).toMatch(/Unexpected token .*/);

        expect(response).toBeNull();

        done();
      }
    });
  });

  test("with error", done => {
    const errorMessage = "Unknown error occurred";
    nock("http://test")
      .get("/error")
      .replyWithError(errorMessage);

    communicator.json({
      method: "GET",
      modulePath: "/error",
      cb: (error, response) => {
        expect(error).not.toBeNull();
        expect(error!.status).toBeUndefined();
        expect(error!.body).toBeUndefined();
        expect(error!.message).toBe(errorMessage);

        expect(response).toBeNull();

        done();
      }
    });
  });
});
