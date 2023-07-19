import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // another way to get the form login without passing it as param to the callback
  @ViewChild('loginForm') loginForm: NgForm | undefined;

  //will be rendered only the static content
  ngOnInit(): void {
  
  }

  ngAfterViewInit():void{
    this.loginForm?.valueChanges?.subscribe(console.log)
  }

  //will render the final content with the dinamyc components
  // ngAfterViewInit():void{
  // }

  submitHandler(): void {
    if (!this.loginForm) return;

    const form = this.loginForm;
    // if the form is invalid
    if (form.invalid) {
      return;
    }

    const value: { email: string, password: string } = form.value;
    console.log(value.email);
    console.log(value.password);

    // reset value
    form.setValue({
      email: '',
      password: ''
    })

  }
}
