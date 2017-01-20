import {NgModule} from '@angular/core';
import {SharedModule} from '../common/shared.module';
import {LoginComponent} from './login.component';
import {LoginFormComponent} from './login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
