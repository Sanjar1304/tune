import { ChangeDetectionStrategy, Component, OnInit, } from '@angular/core';
import { NgClass, NgIf, NgStyle } from '@angular/common';

import { LoginInputComponent } from "./login-input/login-input.component";
import { OtpInputComponent } from "./otp-input/otp-input.component";
import { PasswordInputComponent } from "./password-input/password-input.component";
import { UiSvgIconComponent } from '../../core/components/ui-svg-icon/ui-svg-icon.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    UiSvgIconComponent,
    NgIf,
    NgStyle,
    NgClass,
    LoginInputComponent,
    OtpInputComponent,
    PasswordInputComponent
],
  templateUrl: './auth.component.html',
  styles: `

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {

  public showLoginInput = true;  // Show Login component initially
  public showOtpInput = false;   // Hide OTP component initially
  public showPasswordInput = false; // Hide Password component initially

  public ngOnInit(): void {}

  // Triggered when login is successful in the LoginInputComponent
  onLoginSuccess(): void {
    this.showLoginInput = false;
    this.showOtpInput = true;
  }

  // Triggered when OTP is successfully submitted in the OtpInputComponent
  onOtpSuccess(): void {
    this.showOtpInput = false;
    this.showPasswordInput = true;
      // Display PasswordInputComponent
  }

  // Triggered when the user clicks "Back" from OTP to login
  onOtpBackToLogin(): void {
    this.showOtpInput = false;
    this.showLoginInput = true;
  }

  // Triggered when password is successfully submitted in the PasswordInputComponent
  onPasswordSuccess(): void {

    // Handle successful password submission (e.g., navigate to the home page)
  }
}
