import {Component, OnInit} from '@angular/core';
import {Credentials} from '../../models/credentials';
import {AuthenticationService} from '../../services/authentication.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService,
              private router: Router) {
  }

  ngOnInit() {
  }

  handleCredentials($event: Credentials) {
    this.authenticationService
      .login($event)
      .subscribe(session => {
        this.localStorageService.setSession(session);
        this.router.navigate(['/admin'])
      });
  }

}
