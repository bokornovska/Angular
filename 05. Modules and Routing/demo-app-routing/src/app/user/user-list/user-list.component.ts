import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

import { User } from '../../types/User';
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: User[] = []


  constructor(private userService: UserService, private globalLoaderService: GlobalLoaderService) {

  }
  ngOnInit(): void {

    this.globalLoaderService.showLoader();
    setTimeout(() => {
      this.userService.fetchUsers().subscribe(users => {
        // console.log(users);
        this.userList = users;
        this.globalLoaderService.hideLoader();
      });
    }, 3000)

  }

}
