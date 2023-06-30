import { Component, OnInit, Input, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MyClass } from '../app.module';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
  providers: []
})
export class TestComponent implements OnInit {

  @Input() users!: { name: string }[];

  constructor(
    // @Inject('Test') test: string
    test: MyClass
  ) {
    console.log(test)
  }

  ngOnInit(): void {

  }
}

// Dependency injection
class Wallet {
  constructor(private amount: number) {

  }
}

class Person {

  constructor(private wallet: Wallet) {

  }
}

const w = new Wallet(200);
const p = new Person(w)
