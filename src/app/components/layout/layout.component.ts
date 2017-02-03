import {Component, OnInit} from '@angular/core';
import {RoutesRecognized, Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {LocalStorageService} from '../../services/local-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  showNavbar: boolean;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.onRouteChange();
  }

  onRouteChange() {
    this.router.events.subscribe((event) => this.toggleNavbar(event));
  }

  toggleNavbar(event) {
    if (!(event instanceof RoutesRecognized)) {
      return;
    }
    let showNavbar = event.state.root.firstChild.data['showNavbar'];
    this.showNavbar = showNavbar === null || showNavbar === undefined ? true : showNavbar;
  }

  logout() {
    this.authenticationService
      .logout(this.localStorageService.getSession())
      .map(() => this.localStorageService.destroySession())
      .subscribe(() => this.router.navigate(['/']));
  }
}
