import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';

@NgModule({
  // Template specific items
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule, //this includes commonModule
    AppRoutingModule
  ],
  providers: [

  ], //used for dep injection
  bootstrap: [AppComponent]
})
export class AppModule { }
