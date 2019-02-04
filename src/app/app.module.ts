import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { ContentComponent } from './content/content.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HalfHourComponent } from './half-hour/half-hour.component';
import { OptionsComponent } from './options/options.component';
import { OneHourComponent } from './one-hour/one-hour.component';
import { TwoHourComponent } from './two-hour/two-hour.component';
import { MoreTimeComponent } from './more-time/more-time.component';
import { OmdbServiceClient } from './services/omdb.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    ContentComponent,
    WelcomeComponent,
    HalfHourComponent,
    OptionsComponent,
    OneHourComponent,
    TwoHourComponent,
    MoreTimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppComponent,
    OmdbServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

