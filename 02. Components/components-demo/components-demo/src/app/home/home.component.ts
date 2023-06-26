import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myProp = 'Hello world';

  constructor(){
    setTimeout(() => {
      this.myProp = 'Hello Other World'
    }, 2000)
  }
}
