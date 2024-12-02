import {ChangeDetectionStrategy, Component, OnInit, signal,} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

import { LoginInputComponent } from "./login-input/login-input.component";
import { OtpInputComponent } from "./otp-input/otp-input.component";
import { PasswordInputComponent } from "./password-input/password-input.component";
import { UiSvgIconComponent } from '../core/components/ui-svg-icon/ui-svg-icon.component';
import { RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,
    UiSvgIconComponent,
    PasswordInputComponent,
    OtpInputComponent,
    LoginInputComponent,
    NgOptimizedImage,
  ],
  templateUrl: './auth.component.html',
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {

  public ngOnInit(): void {}

}
