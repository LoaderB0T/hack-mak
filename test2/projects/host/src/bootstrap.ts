import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { ModuleDefinition } from './module.model';

fetch('/assets/modules.json')
  .then((response) => response.json())
  .then((m) => m as ModuleDefinition)
  .then((modules) => {
    return Promise.all(
      modules.map((module) => {
        loadRemoteModule({
          exposedModule: './Module',
          remoteName: module.name,
          remoteEntry: module.url + module.name + '.js',
        }).then((m) => {
          modules.push(m[module.ngModuleName]);
        });
      })
    );
  })
  .then(() => {
    if(environment.production) {
      enableProdMode();
    }

    import('./app/app.module').then((appModule) => {
      platformBrowserDynamic()
        .bootstrapModule(appModule.AppModule)
        .catch((err) => console.error(err));
    });
  });
