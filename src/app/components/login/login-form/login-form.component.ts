import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Credentials} from '../../../models/credentials';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  @Output() credentials: EventEmitter<Credentials> = new EventEmitter();

  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      password: ['', [<any>Validators.required, <any>Validators.minLength(5)]]
    });
  }

  submit(value: Credentials, valid: boolean) {
    if (valid) {
      this.credentials.emit(value)
    }
  }

}
