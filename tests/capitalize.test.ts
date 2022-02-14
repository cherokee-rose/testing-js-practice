import capitalize from "../functions/capitalize";

test("make the first character upper-case", () => {
  expect(capitalize("johnny")).toBe("Johnny");
});
