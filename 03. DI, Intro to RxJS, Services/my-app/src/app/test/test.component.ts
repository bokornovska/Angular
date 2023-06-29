import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit {

  @Input() users!: { name: string }[];

  constructor() {

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
