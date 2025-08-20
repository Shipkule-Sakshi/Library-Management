import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),           // optional: global error logging
    provideZoneChangeDetection({ eventCoalescing: true }), // optional: improve performance
    provideRouter(routes)                            // <-- main router provider
  ]
};
