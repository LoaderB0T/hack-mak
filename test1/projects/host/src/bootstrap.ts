import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { modules } from './modules';

import { environment } from './environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';



loadRemoteModule({
  exposedModule: './Module',
  remoteName: 'module1',
  remoteEntry: 'http://localhost:3000/module1.js'
})
  .then(m => {
    modules.push(m.MainModule);
  })
  .then(() => {
    import('./app/app.module').then(appModule => {
      platformBrowserDynamic()
        .bootstrapModule(appModule.AppModule)
        .catch(err => console.error(err));
    });
  });
