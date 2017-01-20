import {Http, Response, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

import {Post} from '../models/post';
import {User} from '../models/user';
import {Session} from '../models/user-session';

@Injectable()
export class LocalStorageService {

  constructor() {
  }

  setSession(session: Session) {
    localStorage.setItem('session', JSON.stringify(session));
  }

  getSession(): Session {
    return JSON.parse(localStorage.getItem('session'));
  }

  destroySession() {
    localStorage.removeItem('session');
  }
}
