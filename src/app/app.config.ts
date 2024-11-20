import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { authRequestCheckInterceptor, fileUploadInterceptor, requestInterceptor } from "./core/interceptors/request.interceptor";
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { ToastConfig } from "./core/config/app.packages.config";

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { provideToastr } from "ngx-toastr";

import { routes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideEnvironmentNgxMask } from "ngx-mask";


const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironmentNgxMask(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideAnimationsAsync(),
    provideToastr(ToastConfig),
    provideHttpClient(withInterceptors([requestInterceptor, authRequestCheckInterceptor, fileUploadInterceptor])),
    provideTransloco({
      config: {
        availableLangs: ['en', 'uz', 'ru'],
        defaultLang: 'uz',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    })
  ]
};
