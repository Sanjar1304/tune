import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
  inject,
  signal, DestroyRef
} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { JSEncrypt } from 'jsencrypt';
import {NgClass, NgIf} from '@angular/common';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import { UiSvgIconComponent } from "../../core/components/ui-svg-icon/ui-svg-icon.component";
import { UserDataDto } from '../../core/models/user.model';
import { UserService } from '../../core/services/root/user.service';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TranslocoPipe} from "@jsverse/transloco";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiSvgIconComponent,
    TranslocoPipe,
    NgClass,
    MatButton,
    RouterLink
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordInputComponent implements OnInit {

  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef)
  private authService = inject(AuthService);
  private router = inject(Router);
  private userService = inject(UserService);
  private activatedRoute = inject(ActivatedRoute);

  passwordForm!: FormGroup;
  showPassword = signal(false);
  showConfirmPassword = signal(false);
  isReg = signal(false);
  phoneNumber = signal<string | null>(null)
  @Output() passwordSubmit = new EventEmitter<void>();

  error_messages = {
    'password': [
      {type: 'required', message: 'errorMessages.passwordErrors.required'},
      {type: 'minlength', message: 'errorMessages.passwordErrors.minLength'},
      {type: 'maxlength', message: 'errorMessages.passwordErrors.maxLength'},
      {type: 'mismatch', message: 'errorMessages.passwordErrors.mismatch'}
    ],
    'confirmPassword': [
      {type: 'required', message: 'errorMessages.passwordErrors.required'},
      {type: 'minlength',  message: 'errorMessages.passwordErrors.minLength'},
      {type: 'maxlength', message: 'errorMessages.passwordErrors.maxLength'},
      {type: 'mismatch', message: 'errorMessages.passwordErrors.mismatch'}
    ]
  }

  constructor() {
    this.authService.isRegCheck$
      .pipe(
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroy$)
      ).subscribe(value => {
        this.isReg.set(value);
        this.validatePasswordForm(); // Re-validate form based on isReg
    });
  }

  ngOnInit(): void {
    this.validatePasswordForm();

    this.activatedRoute.paramMap
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((params) => {
      const number = params.get('phoneNumber');
      console.log('Retrieved phoneNumber from route:', number);
      this.phoneNumber.set(number || null)
    })
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
      }, {validators: this.passwordMatchValidator});
    }
  }

  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password')?.value || '';
    const confirmPassword = control.get('confirmPassword')?.value || '';
    return password !== confirmPassword ? { passwordMismatch: true } : null;
  }

  get mismatchError(){
    return this.error_messages.confirmPassword.find(error => error.type === 'mismatch')?.message || null;
  }

  onSubmit(): void {
    if (this.passwordForm.valid) {
      this.passwordSubmit.emit();
      const password = this.passwordForm.get('password')?.value;
      const hashedKey = this.authService.hashedKey;
      const identity = this.authService.identity;
      if (hashedKey && identity) {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(hashedKey);
        const encryptedPassword = jsEncrypt.encrypt(password);
        if (encryptedPassword) {
          this.authService.sendEncryptedLoginPassword(identity, encryptedPassword)
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe({
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
    const phone = this.phoneNumber();
    console.log('Phone number in navigateToOtp:', phone);
    if (phone) {
      this.router.navigate(['auth/otp', phone]);
    } else {
      console.error('Phone number is null. Navigation aborted.');
    }
  }

  public navigateToResetPassword(){
    this.router.navigate(['auth/reset-password']);
  }

}
