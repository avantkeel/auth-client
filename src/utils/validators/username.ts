export interface UsernameValidation {
  minLength: boolean;
  maxLength: boolean;
  validChars: boolean;
  startsWithLetter: boolean;
  noSpaces: boolean;
  isValid: boolean;
}

export function validateUsername(username: string): UsernameValidation {
  const minLength = username.length >= 3;
  const maxLength = username.length <= 20;
  const validChars = /^[a-zA-Z0-9._]+$/.test(username);
  const startsWithLetter = /^[a-zA-Z]/.test(username);
  const noSpaces = !/\s/.test(username);
  const isValid =
    minLength && maxLength && validChars && startsWithLetter && noSpaces;

  return {
    minLength,
    maxLength,
    validChars,
    startsWithLetter,
    noSpaces,
    isValid,
  };
}
