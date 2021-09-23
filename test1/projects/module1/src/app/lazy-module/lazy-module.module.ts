import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyModuleComponent } from './lazy-module.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LazyModuleComponent
    }])
  ],
  declarations: [LazyModuleComponent]
})
export class LazyModuleModule { }
