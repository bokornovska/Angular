import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    email: ['', [Validators.required, Validators.minLength(5)]],
    username: ['', [Validators.required, appEmailValidator(DEFAULT_EMAIL_DOMAINS)]],
    tel: ['',],
    passGroup: this.fb.group({
      password: ['', [Validators.required], Validators.minLength(5)],
      repass: ['', [Validators.required]]
    },
    {
      validators: [matchPasswordsValidator('password', 'repass')]
    })
  })
  constructor(private fb: FormBuilder) {

  }

  register(): void {
    if(this.form.invalid){return;}
    console.log(this.form.value)
  }
}
