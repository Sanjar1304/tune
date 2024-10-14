import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import {authRequestCheckInterceptor, requestInterceptor} from "./core/interceptors/request.interceptor";
import {provideHttpClient, withInterceptors} from '@angular/common/http';

import {ToastConfig} from "./core/config/app.packages.config";
import { TranslocoHttpLoader } from './transloco-loader';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {provideToastr} from "ngx-toastr";
import { provideTransloco } from '@jsverse/transloco';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideToastr(ToastConfig),
    provideHttpClient(withInterceptors([requestInterceptor, authRequestCheckInterceptor])),
    provideTransloco({
        config: {
          availableLangs: ['en', 'ru', 'uz'],
          defaultLang: 'uz',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      }),
  ]
};
