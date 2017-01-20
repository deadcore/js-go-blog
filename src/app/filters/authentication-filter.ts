import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';


@Injectable()
export class AuthenticationFilter implements CanActivate {

  constructor(private router: Router, private localStorageService: LocalStorageService) {
  }

  isLoggedIn(): boolean {
    return !!this.localStorageService.getSession();
  }

  canActivate(): Observable<boolean> {
    return Observable.of(this.isLoggedIn()).do(loggedIn => {
      if (!loggedIn) {
        this.router.navigate(['/login'])
      }
    })
  }
}
