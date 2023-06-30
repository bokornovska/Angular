import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';



export class MyClass {
  constructor() {
    console.log('Nameless class was constructed')
  }
}

const myProvider: Provider = {
  // useValue: 123,
  useClass: MyClass,
  provide: MyClass,
  // provide: "Test"
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    myProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
