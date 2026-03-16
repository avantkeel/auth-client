export type SignupPayload = {
  username: string;
  displayName: string;
  email: string;
  password: string;
  locale: string;
  timezone: string;
  captchaToken: string;
  terms: {
    agree: true;
    termsVersion: string;
  };
  device: {
    name: string;
    type: string;
    app_version: string;
  };
};

export type SignupSuccessResponse = {
  success: true;
  message: string;
  data: {
    user: {
      id: string;
      username: string;
      email: string;
      display_name: string;
      locale: string;
      timezone: string;
      email_verified: boolean;
      created_at: string;
    };
    session: {
      session_id: string;
      device: {
        name: string;
        type: string;
      };
      created_at: string;
      tokens: {
        access_token: string;
        refresh_token: string;
        expires_in: number;
      };
    };
  };
};

export type SignupErrorResponse = {
  success: false;
  error: {
    type:
      | "VALIDATION"
      | "CONFLICT"
      | "AUTHENTICATION"
      | "AUTHORIZATION"
      | "SERVER";
    code: string;
    message: string;
    details?: Array<{
      field?: string;
      code: string;
      message: string;
    }>;
  };
};
