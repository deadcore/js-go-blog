import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from './menu-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`

      :host {
        display: block;
      }

      .navbar {
        margin-bottom: 0;
      }
  `]
})
export class NavbarComponent implements OnInit {

  brand: string;
  menuItems: Array<MenuItem>;

  @Output() logout = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): any {
    this.brand = 'igu.io';
    this.menuItems = this.getMenuItems().reverse();
  }

  getMenuItems(): Array<MenuItem> {
    return [
      {
        name: 'Dashboard',
        link: 'dashboard'
      },
      {
        name: 'Manage Users',
        link: 'users'
      },
      {
        name: 'Logout',
        method: () => this.logout.emit()
      },
    ];
  }
}
