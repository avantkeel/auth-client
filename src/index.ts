import UnimplementedMethodError from "./errors/UnimplementedMethodError";
import type {
  SignupPayload,
  SignupSuccessResponse,
  SignupErrorResponse,
} from "./types/signup";

export default class AuthService {
  private baseurl: string;

  constructor(baseurl: string) {
    this.baseurl = baseurl;
  }

  async signin() {
    throw new UnimplementedMethodError("signin");
  }
  async signup(
    payload: SignupPayload,
  ): Promise<SignupSuccessResponse | SignupErrorResponse> {
    const url = `${this.baseurl}/api/v1/authentication/signup`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || result.success === false) {
      return result as SignupErrorResponse;
    }

    return result as SignupSuccessResponse;
  }

  async signout() {
    throw new UnimplementedMethodError("signout");
  }

  async refresh() {
    throw new UnimplementedMethodError("refresh");
  }
  async signoutAll() {
    throw new UnimplementedMethodError("refresh");
  }
}
