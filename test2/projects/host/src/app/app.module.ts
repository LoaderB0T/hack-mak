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
} from '@sw/angular-controls';
import { loadedModules } from '../module.model';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SWAppbarModule,
    SWIconModule,
    SWMenuModule,
    SWSidenavModule,
    SWNavigationDrawerModule,
    BrowserAnimationsModule,
    loadedModules
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
