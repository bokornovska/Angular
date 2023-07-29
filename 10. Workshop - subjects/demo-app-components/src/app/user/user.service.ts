import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

const USER_KEY = '[user]'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user$$ = new BehaviorSubject<User | undefined>(undefined);

  user$ = this.user$$.asObservable();
  
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http
    .post<User>('/api/login', { email, password })
    .pipe(tap((user) => this.user$$.next(user)))
  }

  register(
    username: string,
    email: string,
    password: string,
    repass: string,
    tel: string
  ) {

    return this.http.post('/api/register', { username, email, password, repass, tel })
  }



  logout(): void {
    this.user = undefined;
    localStorage.removeItem(USER_KEY);
  }



}
