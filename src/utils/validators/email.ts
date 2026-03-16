export interface EmailValidation {
  hasAtSymbol: boolean;
  hasDomain: boolean;
  hasValidFormat: boolean;
  noSpaces: boolean;
  isValid: boolean;
}

export function validateEmail(email: string): EmailValidation {
  const hasAtSymbol = /.+@.+/.test(email);
  const hasDomain = /\.[a-z]{2,}$/i.test(email);
  const hasValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const noSpaces = !/\s/.test(email);
  const isValid = hasAtSymbol && hasDomain && hasValidFormat && noSpaces;

  return {
    hasAtSymbol,
    hasDomain,
    hasValidFormat,
    noSpaces,
    isValid,
  };
}
