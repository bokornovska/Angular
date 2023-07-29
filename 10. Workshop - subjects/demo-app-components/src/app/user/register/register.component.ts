import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { DEFAULT_EMAIL_DOMAINS } from 'src/app/shared/constants';
import { appEmailValidator } from 'src/app/shared/validators/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/validators/match-passwords-validator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

  }

  register(): void {
    if (this.form.invalid) { return; }

    const { 
      username, 
      email, 
      tel, 
      passGroup: {password, repass} = {}
     } = this.form.value;

    this.userService.register(username!, email!, tel!, password!, repass!).subscribe(() => {
      this.router.navigate(['/login'])
    })
  }
}
