import { describe, it, expect } from "vitest";
import { validatePassword } from "./password";

describe("validatePassword", () => {
  it("should pass a perfectly strong password", () => {
    const result = validatePassword("SecureP@ss123");

    expect(result.lengthValid).toBe(true);
    expect(result.capsValid).toBe(true);
    expect(result.symbolsValid).toBe(true);
    expect(result.numbersValid).toBe(true);
    expect(result.noSpaces).toBe(true);
    expect(result.isStrong).toBe(true);
  });

  it("should fail if length is less than 10", () => {
    const result = validatePassword("Ab1!56789"); // 9 chars
    expect(result.lengthValid).toBe(false);
    expect(result.isStrong).toBe(false);
  });

  it("should fail if lowercase or uppercase is missing", () => {
    expect(validatePassword("alllowercase1!").capsValid).toBe(false);
    expect(validatePassword("ALLUPPERCASE1!").capsValid).toBe(false);
  });

  it("should fail if numbers are missing", () => {
    const result = validatePassword("NoNumbersHere!");
    expect(result.numbersValid).toBe(false);
    expect(result.isStrong).toBe(false);
  });

  it("should fail if symbols are missing", () => {
    const result = validatePassword("NoSymbols123");
    expect(result.symbolsValid).toBe(false);
  });

  it("should fail if it contains spaces", () => {
    const result = validatePassword("Password 123!");
    expect(result.noSpaces).toBe(false);
    expect(result.isStrong).toBe(false);
  });

  it("should handle empty strings gracefully", () => {
    const result = validatePassword("");
    expect(result.isStrong).toBe(false);
    expect(result.lengthValid).toBe(false);
  });
});
