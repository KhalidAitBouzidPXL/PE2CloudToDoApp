import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '245edcfa-d28b-46e1-af65-53ade6df0cf7',
    clientToken: 'pubd088bbd912fde5e0ab717b66f88995b5',
    site: 'us5.datadoghq.com',
    service: 'cloudtodoapp',
    env: 'production',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
