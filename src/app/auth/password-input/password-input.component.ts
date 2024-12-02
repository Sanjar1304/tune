import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  inject,
  input,
  DestroyRef, signal
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, distinctUntilChanged } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { JSEncrypt } from 'jsencrypt';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { UiSvgIconComponent } from "../../core/components/ui-svg-icon/ui-svg-icon.component";
import { UserDataDto } from '../../core/models/user.model';
import { UserService } from '../../core/services/root/user.service';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiSvgIconComponent,
    NgIf
  ],
  templateUrl: './password-input.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordInputComponent implements OnInit {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private userService = inject(UserService);

  passwordForm!: FormGroup;
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  isReg = signal(false);
  @Output() passwordSubmit = new EventEmitter<void>();

  constructor() {
    // Set the initial value of isReg based on authService.isRegCheck$
    this.authService.isRegCheck$.pipe(distinctUntilChanged()).subscribe(value => {
      this.isReg.set(value);
      this.validatePasswordForm(); // Re-validate form based on isReg
    });
  }

  ngOnInit(): void {
    this.validatePasswordForm();
  }

  validatePasswordForm(): void {
    if (this.isReg()) {
      this.passwordForm = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
      });
    } else {
      this.passwordForm = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]]
      });
    }
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      this.passwordSubmit.emit();
      const password = this.passwordForm.getRawValue().password;
      const hashedKey = this.authService.hashedKey;
      const identity = this.authService.identity;
      if (hashedKey && identity) {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(hashedKey);
        const encryptedPassword = jsEncrypt.encrypt(password);
        if (encryptedPassword) {
          this.authService.sendEncryptedLoginPassword(identity, encryptedPassword).subscribe({
            next: (res: UserDataDto | null) => {
              if (res) {
                this.userService.setToken(res.access.accessToken);
                this.userService.setUserLocalData(res);
                this.userService.setUserData(res);
                this.router.navigate(['/']);
              }
            },
            error: err => console.log(err)
          });
        } else {
          console.log('Encryption failed');
        }
      }
    }
  }

  togglePasswordVisibility(): void {
    this.showPassword.update(value => !value);
  }

  toggleConfirmPasswordVisibility(): void {
    if (!this.isReg()) {
      this.showConfirmPassword.update(value => !value);
    }
  }

  public navigateToOtp(){
      this.router.navigate(['auth/otp'])
  }
}
