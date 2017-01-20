import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {AdminComponent} from './admin.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
