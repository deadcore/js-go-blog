import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoggedOutGuard implements CanActivate {

  constructor(private router: Router) {
  }

  isLoggedOut(): Observable<boolean> {
    return Observable.of(true)
  }

  canActivate(): Observable<boolean> {
    return this.isLoggedOut().map((isLoggedOut) => {
      if (!isLoggedOut) this.router.navigate(['dashboard']);
      return isLoggedOut;
    });
  }
}
