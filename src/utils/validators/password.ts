export interface PasswordValidation {
  lengthValid: boolean;
  capsValid: boolean;
  symbolsValid: boolean;
  numbersValid: boolean;   // Added: 0-9
  noSpaces: boolean;       // Added: Prevent bypasses with spaces
  isStrong: boolean;       // Added: Convenience flag for UI
}

export function validatePassword(password: string): PasswordValidation {
  const lengthValid = password.length >= 10; // Modern standard is shifting toward 10-12
  const capsValid = /[A-Z]/.test(password) && /[a-z]/.test(password);
  const symbolsValid = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const numbersValid = /\d/.test(password);
  const noSpaces = !/\s/.test(password);

  // A password is "Strong" only if it hits every single mark
  const isStrong =
    lengthValid &&
    capsValid &&
    symbolsValid &&
    numbersValid &&
    noSpaces;

  return {
    lengthValid,
    capsValid,
    symbolsValid,
    numbersValid,
    noSpaces,
    isStrong
  };
}
