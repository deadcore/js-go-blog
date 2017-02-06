import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  showNavbar: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService) {
  }

  logout() {
    this.authenticationService
      .logout(this.localStorageService.getSession())
      .map(() => this.localStorageService.destroySession())
      .subscribe(() => this.router.navigate(['/']));
  }
}
