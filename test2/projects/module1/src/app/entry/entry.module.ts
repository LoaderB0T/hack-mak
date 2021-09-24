import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntryComponent } from './entry.component';
import { RouterModule } from '@angular/router';
import { SharedService } from '@shared';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: 'module1',
      component: EntryComponent,
    }
  ])],
  declarations: [EntryComponent],
})
export class EntryModule {
  constructor(sharedService: SharedService) {
    sharedService.addMenuItem({route: 'module1', title: 'Module 1', icon: 'home'});
  }
}
