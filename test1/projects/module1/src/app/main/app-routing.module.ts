import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('../lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
