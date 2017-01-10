import { UserSession } from '../../app/models/user-session';

export const UserSessionFixture: UserSession = {
  session: {
    userId: '123-AB',
    firstName: 'Marcus',
    email: 'myEmail@gmail.com',
    token: 'myToken',
    roles: new Array('Admin'),
    expiry: new Date(),
    lastLoggedIn: new Date()
  },
  rememberMeToken: {
    token: 'myRefreshToken',
    series: 'dunnoSeries'
  }
};


