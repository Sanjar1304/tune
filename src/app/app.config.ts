import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {authRequestCheckInterceptor, fileUploadInterceptor, requestInterceptor} from "./core/interceptors/request.interceptor";
import {provideHttpClient, withInterceptors} from '@angular/common/http';

import {ToastConfig} from "./core/config/app.packages.config";

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import {provideToastr} from "ngx-toastr";

import { routes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideToastr(ToastConfig),
    provideHttpClient(withInterceptors([requestInterceptor, authRequestCheckInterceptor, fileUploadInterceptor])),
    provideTransloco({
        config: {
          availableLangs: ['en','uz','ru'],
          defaultLang: 'uz',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ]
};
