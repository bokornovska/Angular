import { Component } from '@angular/core';
import { ICustomEvent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  users = [
    {
      firstName: 'Ivan',
      lastName: 'Ivanov'
    },
    {
      firstName: 'Peter',
      lastName: 'Petrov'
    }
  ];

  showLastName = true;

  selectedUserIndex: null | number = null;

  handliClickEvent(){
    this.showLastName = !this.showLastName;
  }

  listItemClickHandler(index: number){
    this.selectedUserIndex = index;
  }

  customEventHandler($event: ICustomEvent){
console.log($event.test)
  }
}
