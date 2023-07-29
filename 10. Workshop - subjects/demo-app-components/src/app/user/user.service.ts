import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';

const USER_KEY = '[user]'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http:HttpClient) {
    try {
      const lsUser = localStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined;
    }
  }

  login(email: string, password: string) {
    // this.user = {
    //   email: 'john.doe@email.com',
    //   firstName: 'John',
    // };

    // localStorage.setItem(USER_KEY, JSON.stringify(this.user));

    return this.http.post('/api/login', {email, password})
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(USER_KEY);
  }

}
