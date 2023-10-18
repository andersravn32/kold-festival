import { expect, test } from "vitest";
import validate from "./validate";

test("Check for empty inputs", () => {
    expect(validate(null, null, null, null,)).toBe(false)
})

test("Check that firstname does not contain number", () => {
    expect(validate("Anders1", "Ravn", "anders@adriansen.dk", "Hello world",)).toBe(false)
})

test("Check that lastname does not contain number", () => {
    expect(validate("Anders", "Ravn1", "anders@adriansen.dk", "Hello world",)).toBe(false)
})

test("Check that email formatting is correct", () => {
    expect(validate("Anders", "Ravn", "andersadriansen.dk", "Hello world",)).toBe(false)
})