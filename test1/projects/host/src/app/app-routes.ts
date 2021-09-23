import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    {
      path: 'module1',
      loadChildren: () => import('module1/Module').then(m => m.FlightsModule)
    },
];