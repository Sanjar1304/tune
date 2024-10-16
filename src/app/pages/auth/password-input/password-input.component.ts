import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Observable, distinctUntilChanged } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { JSEncrypt } from 'jsencrypt';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { UiSvgIconComponent } from "../../../core/components/ui-svg-icon/ui-svg-icon.component";
import { UserDataDto } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/root/user.service';

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

  showPassword: boolean = false; // To toggle visibility for the password field
  showConfirmPassword: boolean = false; // To toggle visibility for the confirm password field
  isReg: Observable<boolean>;
  passwordForm!: FormGroup;

  @Output() passwordSubmit = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  private userService = inject(UserService);


  constructor() {
    this.isReg = this.authService.isRegCheck$
  }

  public ngOnInit(): void {
    this.validatePasswordForm();
  }

  public validatePasswordForm() {
    if (this.isReg) {
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

  public onSubmit(): void {
    if (this.passwordForm.valid) {
      this.passwordSubmit.emit();
      const password = this.passwordForm.getRawValue().password;
      const hashedKey = this.authService.hashedKey;
      const identity = this.authService.identity;
      if(hashedKey && identity){
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(hashedKey);
        const encryptedPassword = jsEncrypt.encrypt(password);
        if(encryptedPassword){
          this.authService.sendEncryptedLoginPassword(identity, encryptedPassword).subscribe({
            next: (res: UserDataDto | null) => {
              if(res){
                this.userService.setToken(res.access.accessToken);
                this.userService.setUserLocalData(res);
                this.userService.setUserData(res);
                this.router.navigate(['/']);
              }
            },
            error: err => console.log(err)
          })
        } else {
          console.log('Encryption failed')
        }
      }
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
    // Ensure confirm password visibility is tied to registration state
    if (!this.isReg) {
      this.showConfirmPassword = false; // Reset confirm password visibility if registering
    }
  }

  public toggleConfirmPasswordVisibility(): void {
    if (!this.isReg) {
      this.showConfirmPassword = !this.showConfirmPassword;
    }
  }
}
