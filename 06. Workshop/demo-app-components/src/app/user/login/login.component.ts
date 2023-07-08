import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userServicce: UserService, private router:Router) {
    
  }

  login(email: string, password: string): void {
    this.userServicce.login();
    this.router.navigate(['/']);
    // TODO: handle the data
  }
}
