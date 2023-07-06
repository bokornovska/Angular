import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit():void {

  }
}
