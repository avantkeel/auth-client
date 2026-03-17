import { describe, it, expect } from "vitest";
import { validateEmail } from "./email";

describe("validateEmail", () => {
  it("should pass a valid email address", () => {
    const result = validateEmail("test@example.com");
    expect(result.isValid).toBe(true);
    expect(result.hasAtSymbol).toBe(true);
    expect(result.hasDomain).toBe(true);
  });

  it("should fail if @ symbol is missing", () => {
    const result = validateEmail("testexample.com");
    expect(result.hasAtSymbol).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if top-level domain is missing", () => {
    const result = validateEmail("test@example");
    expect(result.hasDomain).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if it contains spaces", () => {
    const result = validateEmail("test @example.com");
    expect(result.noSpaces).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should handle complex but valid emails", () => {
    const result = validateEmail("first.last+alias@sub.domain.org");
    expect(result.isValid).toBe(true);
  });

  it("should handle empty strings", () => {
    const result = validateEmail("");
    expect(result.isValid).toBe(false);
    expect(result.hasAtSymbol).toBe(false);
  });
});
