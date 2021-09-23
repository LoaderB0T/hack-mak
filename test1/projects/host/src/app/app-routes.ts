import { Routes } from '@angular/router';

const URL = 'http://localhost:3000/remoteEntry.js';

export const APP_ROUTES: Routes = [
    {
      path: 'module1',
      loadChildren: () => import('module1/Module').then(m => m.AppModule)
    },
];