import {UserSession, Session} from 'models/user-session';
import {Credentials} from 'models/credentials';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
  }

  login(credentials: Credentials): Observable<UserSession> {
    return this.http.post(`${AppConfig.apiAuthBaseUrl}/api/auth`, credentials)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.json() || 'No Server Response'));
  }

  logout(session: Session): Observable<boolean> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('token', session.token);

    return this.http.delete(`${AppConfig.apiAuthBaseUrl}/api/auth`, {search: params})
      .map(res => true)
      .catch(err => Observable.throw(err));
  }
}
