export interface UserSession {
  session: Session;
  rememberMeToken: RememberMeToken;
}

export interface RememberMeToken {
  token: string;
  series: string;
}

export interface Session {
  userId: string;
  firstName: string;
  email: string;
  token: string;
  roles: Array<string>;
  expiry: Date;
  lastLoggedIn: Date;
}

