import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable()
export class LoggedInGuard implements CanActivate {

  constructor(private router: Router) {
  }

  isLoggedIn(): Observable<boolean> {
    return Observable.of(true);
  }

  canActivate(): Observable<boolean> {
    return this.isLoggedIn().map((isLoggedIn) => {
      if (!isLoggedIn) {
        this.router.navigate(['login']);
      }
      return isLoggedIn;
    });
  }
}
