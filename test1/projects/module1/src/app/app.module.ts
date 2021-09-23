import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MainModule, RouterModule.forRoot([])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
