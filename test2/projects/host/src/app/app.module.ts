import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SWAppbarModule,
  SWIconModule,
  SWMenuModule,
  SWNavigationDrawerModule,
  SWSidenavModule,
  SWListModule,
} from '@sw/angular-controls';
import { loadedModules } from '../module.model';
import { HomeComponent } from './home/home.component';
import { NgMarqueeModule } from 'ng-marquee';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SWAppbarModule,
    SWIconModule,
    SWMenuModule,
    SWSidenavModule,
    SWNavigationDrawerModule,
    BrowserAnimationsModule,
    SWListModule,
    loadedModules,
    NgMarqueeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
