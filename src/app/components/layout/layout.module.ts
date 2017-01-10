import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../common/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
