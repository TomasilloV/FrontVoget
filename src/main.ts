import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { enableProdMode } from '@angular/core';

// Import Zone.js - Required for Angular's change detection
import 'zone.js';

// Enable production mode unless running locally
if (process.env['NODE_ENV'] === 'production') {
  enableProdMode();
}

// Bootstrap the application
bootstrapApplication(App, appConfig)
  .catch(err => console.error(err));
