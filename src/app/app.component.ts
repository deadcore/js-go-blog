import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-layout></app-layout>`,
  styles: [`
    :host {
      display: block;
      height: 100%;
    }
  `]
})
export class AppComponent {
}
