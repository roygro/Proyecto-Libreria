import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import 'zone.js'; // Importa Zone.js antes de inicializar la app


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
