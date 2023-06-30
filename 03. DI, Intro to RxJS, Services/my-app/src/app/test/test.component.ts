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

interface ClassProvider {
  provide: any;
  useClass?: any;

};

interface ValueProvider {
  provide: any;
  useValue: any;
}

type Provider = ClassProvider | ValueProvider;

const injector = {
  collection: new Map(),
  instances: new Map(),
  provide(provider: Provider) {
    this.collection.set(provider.provide, provider)
  },
  get(key: any, defaultValue?: any): any {
    const provider = this.collection.get(key) as Provider;

    if (!provider) {
      if (defaultValue) { return defaultValue; }
      throw new Error('Value not found in injector')
    }
    // return result;
    if ((provider as ValueProvider).useValue) {
      return (provider as ValueProvider).useValue;
    }
    if ((provider as ClassProvider).useClass) {
      let instance = this.instances.get(provider.provide);

      if (instance) { return instance };
      instance = new (provider as ClassProvider).useClass();
      this.instances.set(provider.provide, instance);
      return instance;

    }
  }
};

const amount = Symbol('Amount');
type Injector = typeof injector;

class Wallet {
  private amount: number;
  constructor(injector: Injector) {
    this.amount = injector.get(amount, 0);
  }
}
class Person {
  wallet: Wallet;
  constructor(injector: Injector) {
    this.wallet = injector.get(Wallet)
  }
}

class Employee {
  wallet:Wallet;
  constructor(injector: Injector) {
    this.wallet = injector.get(Wallet)
  }
}

injector.provide({ provide: Wallet, useClass: Wallet });
injector.provide({ provide: amount, useValue: amount });

const w = new Wallet(injector);
const p = new Person(injector);
const e = new Employee(injector);

