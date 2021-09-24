import sanitizeHtml from "../src/utils/sanitize-html";

describe("sanitizeHtml", () => {
  test('single line. should result in "hello world"', () => {
    expect(sanitizeHtml("<span>hello world</span>")).toBe("hello world");
  });
  test('multiple lines. should result in "hello world"', () => {
    expect(sanitizeHtml("<span>hello\n<b>world</b></span>")).toBe(
      "hello world"
    );
  });
  test('multiple lines, tabs, spaces. should result in "hello world"', () => {
    expect(
      sanitizeHtml("<span>hello\n\n\n\t     \t   \t\t<b>world</b></span>\t\n")
    ).toBe("hello world");
  });
});
