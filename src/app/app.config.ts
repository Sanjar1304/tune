import { ApplicationConfig, provideZoneChangeDetection, isDevMode, importProvidersFrom } from '@angular/core';
import { authRequestCheckInterceptor, fileUploadInterceptor, requestInterceptor } from "./core/interceptors/request.interceptor";
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { ToastConfig } from "./core/config/app.packages.config";

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions, PreloadAllModules,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig
} from '@angular/router';
import { provideToastr } from "ngx-toastr";

import { routes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { provideEnvironmentNgxMask } from "ngx-mask";
import { Constants } from './core/constants';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { jwtOptionsFactory } from './core/utils';
import { StorageService } from './shared/services/storage.service';


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
    provideRouter(routes, withPreloading(PreloadAllModules),  inMemoryScrollingFeature),
    provideAnimationsAsync(),
    provideToastr(ToastConfig),
    importProvidersFrom(
      JwtModule.forRoot({
        jwtOptionsProvider: {
          provide: JWT_OPTIONS,
          useFactory: jwtOptionsFactory,
          deps: [StorageService],
        },
      }),
    ),
    provideHttpClient(withInterceptors([requestInterceptor, authRequestCheckInterceptor, fileUploadInterceptor])),
    provideTransloco({
      config: {
        availableLangs: Constants.LanguageList,
        defaultLang: Constants.DEFAULT_LANGUAGE,
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
  ]
};
