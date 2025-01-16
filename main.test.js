import { test, expect } from "vitest";
import { reverseText } from "./main.js";

test("should reverse a single word", () => {
  expect(reverseText("hello")).toBe("olleh");
});

test("should reverse a sentence with spaces", () => {
  expect(reverseText("john mcClane")).toBe("enalCcm nhoj");
});

test("should handle uppercase and lowercase correctly", () => {
  expect(reverseText("Hello World")).toBe("dlroW olleH");
});

test("should handle an empty string", () => {
  expect(reverseText("")).toBe("");
});