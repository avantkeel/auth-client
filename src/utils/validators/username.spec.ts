import { describe, it, expect } from "vitest";
import { validateUsername } from "./username";

describe("validateUsername", () => {
  it("should pass a valid username", () => {
    const result = validateUsername("User_123");
    expect(result.isValid).toBe(true);
    expect(result.minLength).toBe(true);
    expect(result.maxLength).toBe(true);
    expect(result.validChars).toBe(true);
    expect(result.startsWithLetter).toBe(true);
    expect(result.noSpaces).toBe(true);
  });

  it("should fail if too short", () => {
    const result = validateUsername("ab");
    expect(result.minLength).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if too long", () => {
    const result = validateUsername("this_is_a_very_long_username123");
    expect(result.maxLength).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if contains invalid characters", () => {
    const result = validateUsername("user!name");
    expect(result.validChars).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if it starts with a non-letter", () => {
    const result = validateUsername("1username");
    expect(result.startsWithLetter).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should fail if it contains spaces", () => {
    const result = validateUsername("user name");
    expect(result.noSpaces).toBe(false);
    expect(result.isValid).toBe(false);
  });

  it("should handle empty strings", () => {
    const result = validateUsername("");
    expect(result.isValid).toBe(false);
    expect(result.minLength).toBe(false);
    expect(result.startsWithLetter).toBe(false);
  });
});
