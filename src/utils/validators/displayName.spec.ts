import { describe, it, expect } from "vitest";
import { validateDisplayName } from "./displayName";

describe("validateDisplayName", () => {
  it("should pass a valid display name", () => {
    const result = validateDisplayName("Henry Ramirez");
    expect(result.isValid).toBe(true);
    expect(result.minLength).toBe(true);
    expect(result.maxLength).toBe(true);
    expect(result.validChars).toBe(true);
    expect(result.noLeadingOrTrailingSpaces).toBe(true);
    expect(result.noConsecutiveSpaces).toBe(true);
  });

  it("should fail if too short", () => {
    const result = validateDisplayName("Hi");
    expect(result.minLength).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if too long", () => {
    const result = validateDisplayName(
      "This is a very long display name that exceeds limit",
    );
    expect(result.maxLength).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if contains invalid characters", () => {
    const result = validateDisplayName("Henry@123");
    expect(result.validChars).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if has leading or trailing spaces", () => {
    const result = validateDisplayName(" Henry ");
    expect(result.noLeadingOrTrailingSpaces).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if contains consecutive spaces", () => {
    const result = validateDisplayName("Henry  Ramirez");
    expect(result.noConsecutiveSpaces).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should handle empty strings", () => {
    const result = validateDisplayName("");
    expect(result.isValid).toBe(false);
    expect(result.minLength).toBe(false);
  });
});
