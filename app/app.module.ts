import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import * as M from "materialize-css/dist/js/materialize";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
