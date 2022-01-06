import each from "jest-each";
import * as headers from "../../../src/utils/headers";

/**
 * @group unit:headers
 */
describe("headers.isBinaryContent", () => {
  const testData = [
    [undefined, false],
    [null, false],
    ["", false],
    ["text/html", false],
    ["application/json", false],
    ["application/xml", false],
    ["application/octet-stream", true]
  ];
  each(testData).test("when the input is '%s'", (contentType, expected) => {
    const result = headers.isBinaryContent(contentType);
    expect(result).toBe(expected);
  });
});

/**
 * @group unit:headers
 */
describe("headers.isJSON", () => {
  const testData = [
    [undefined, true],
    [null, true],
    ["", false],
    ["text/html", false],
    ["application/json", true],
    ["application/xml", false],
    ["application/octet-stream", false]
  ];
  each(testData).test("when the input is '%s'", (contentType, expected) => {
    const result = headers.isJSON(contentType);
    expect(result).toBe(expected);
  });
});

/**
 * @group unit:headers
 */
describe("headers.dispositionFilename", () => {
  const testData = [
    ["attachment; filename=testfile", "testfile"],
    ['attachment; filename="testfile"', "testfile"],
    ['attachment; filename="testfile', '"testfile'],
    ['attachment; filename=testfile"', 'testfile"'],
    ["attachment; filename='testfile'", "testfile"],
    ["attachment; filename='testfile", "'testfile"],
    ["attachment; filename=testfile'", "testfile'"],

    ["filename=testfile", "testfile"],
    ['filename="testfile"', "testfile"],
    ['filename="testfile', '"testfile'],
    ['filename=testfile"', 'testfile"'],
    ["filename='testfile'", "testfile"],
    ["filename='testfile", "'testfile"],
    ["filename=testfile'", "testfile'"],

    ["attachment; filename=testfile; x=y", "testfile"],
    ['attachment; filename="testfile"; x=y', "testfile"],
    ['attachment; filename="testfile; x=y', '"testfile'],
    ['attachment; filename=testfile"; x=y', 'testfile"'],
    ["attachment; filename='testfile'; x=y", "testfile"],
    ["attachment; filename='testfile; x=y", "'testfile"],
    ["attachment; filename=testfile'; x=y", "testfile'"],

    ["attachment", null],

    ['filename="', '"'],
    ["filename='", "'"],

    ["", null]
  ];
  each(testData).test("when the input has header value '%s'", (value, expected) => {
    const filename = headers.dispositionFilename({
      "content-disposition": value
    });
    expect(filename).toBe(expected);
  });

  test("when the input has no content-disposition header", () => {
    const filename = headers.dispositionFilename({});
    expect(filename).toBeNull();
  });
});

/**
 * @group unit:headers
 */
describe("headers.contentLength", () => {
  const testData = [
    ["1234", 1234],
    ["s1234", "s1234"],
    ["", null]
  ];
  each(testData).test("when the input has header value '%s'", (value, expected) => {
    const length = headers.contentLength({
      "content-length": value
    });
    expect(length).toBe(expected);
  });

  test("when the input is '1234'", () => {
    const length = headers.contentLength({
      "content-length": "1234"
    });
    expect(length).not.toBe("1234");
  });

  test("when the input has no content-length header", () => {
    const length = headers.contentLength({});
    expect(length).toBeNull();
  });
});
