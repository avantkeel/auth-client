export interface DisplayNameValidation {
  minLength: boolean;
  maxLength: boolean;
  validChars: boolean;
  noLeadingOrTrailingSpaces: boolean;
  noConsecutiveSpaces: boolean;
  isValid: boolean;
}

export function validateDisplayName(name: string): DisplayNameValidation {
  const minLength = name.length >= 3;
  const maxLength = name.length <= 30;
  const validChars = /^[a-zA-Z0-9 _-]+$/.test(name);
  const noLeadingOrTrailingSpaces = name === name.trim();
  const noConsecutiveSpaces = !/ {2,}/.test(name);
  const isValid =
    minLength &&
    maxLength &&
    validChars &&
    noLeadingOrTrailingSpaces &&
    noConsecutiveSpaces;

  return {
    minLength,
    maxLength,
    validChars,
    noLeadingOrTrailingSpaces,
    noConsecutiveSpaces,
    isValid,
  };
}
