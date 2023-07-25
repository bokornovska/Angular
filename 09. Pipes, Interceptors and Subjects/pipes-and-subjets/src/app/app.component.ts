import { Component } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-and-subjets';

  person = {
    name: 'Pesho',
    age: 25,
    list: [1, 2, 3, 4, 5, 6, 7, 8]
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  addProperty(): void {
    (this.person as any)['test123'] = 'test123';
    console.log(this.person)
  }

  // p = Promise.resolve(100);
  p = new Promise((resolve) => {
    setTimeout(() => {
      resolve(100)
    }, 3000)
  });

  time$ = interval(1000).pipe(
    map(() => new Date())
  )
}
