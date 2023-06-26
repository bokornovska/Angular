import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  // Template specific items
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ListComponent,
    ListItemComponent,
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
