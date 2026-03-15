import UnimplementedMethodError from "./errors/UnimplementedMethodError";

export default class AuthenticationService {
  private baseurl: string;

  constructor(baseurl: string) {
    this.baseurl = baseurl;
  }

  async signin() {
    throw new UnimplementedMethodError("signin");
  }

  async signup() {
    throw new UnimplementedMethodError("signup");
  }

  async signout() {
    throw new UnimplementedMethodError("signout");
  }

  async refresh() {
    throw new UnimplementedMethodError("refresh");
  }
  async signoutAll(){
    throw new UnimplementedMethodError("refresh");
  }
}