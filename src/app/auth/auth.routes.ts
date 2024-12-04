import {Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        loadComponent: () => import('./login-input/login-input.component').then(m => m.LoginInputComponent),
      },
      {
        path: 'otp/:phoneNumber',
        loadComponent: () => import('./otp-input/otp-input.component').then(m => m.OtpInputComponent),
      },
      {
        path: 'password/:phoneNumber',
        loadComponent: () => import('./password-input/password-input.component').then(m => m.PasswordInputComponent),
      },
      {
        path: 'reset-password',
        loadComponent:  () => import('./reset-password/reset-password.component').then(m => m.ResetPasswordComponent),
      }
    ]
  }
];

