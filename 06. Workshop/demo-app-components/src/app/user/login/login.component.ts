import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userServicce: UserService) {
    this.userServicce.login();
    // TODO: handle the data
  }

  login(email: string, password: string): void {

  }
}
