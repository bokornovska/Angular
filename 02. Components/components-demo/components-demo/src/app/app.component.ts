import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'components-demo';

  changeTitleHandler(newTitle: string) {
    this.title = newTitle;
  }
}
