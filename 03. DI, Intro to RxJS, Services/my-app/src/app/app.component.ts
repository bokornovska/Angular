import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  counter = 0;
  users = [
    { name: 'Ivan' },
    { name: 'Pesho' }
  ]
  constructor() {
    // setInterval(() => {
    //   this.counter++;
    // }, 3000)
  }

  addUserHandler = (nameInput: HTMLInputElement): void => {
    const { value: name } = nameInput;
    // this.users.push({ name });
    this.users = this.users.concat({ name })

    nameInput.value = '';
  }

}
