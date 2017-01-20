import {Session} from 'models/user-session';
import {Credentials} from 'models/credentials';
import {Injectable} from '@angular/core';
import {Http, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
  }

  login(credentials: Credentials): Observable<Session> {
    return this.http.post(`${environment.apiBaseUrl}/authentication`, credentials)
      .map(res => res.json())
      .catch((error: any) => Observable.throw(error.statusText));
  }

  logout(session: Session): Observable<boolean> {
    return this.http.delete(`${environment.apiBaseUrl}/authentication/${session.Token}`)
      .map(res => true)
      .catch(err => Observable.throw(err));
  }
}
