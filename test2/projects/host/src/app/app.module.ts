import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SWToolbarModule, SWIconModule } from '@sw/angular-controls';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SWToolbarModule, SWIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
