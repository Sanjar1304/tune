import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal, output, DestroyRef
} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {NgClass, NgOptimizedImage} from '@angular/common';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UiSvgIconComponent } from '../../core/components/ui-svg-icon/ui-svg-icon.component';
import {CustomToasterService} from "../../core/services/utils/toast.service";
import {NgxMaskDirective} from "ngx-mask";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {TranslocoPipe} from "@jsverse/transloco";
import {MatButton} from "@angular/material/button";


interface UserType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    UiSvgIconComponent,
    MatFormField,
    MatSelect,
    MatOption,
    NgClass,
    NgOptimizedImage,
    NgxMaskDirective,
    MatIcon,
    MatProgressSpinner,
    TranslocoPipe,
    MatButton
  ],
  templateUrl: './login-input.component.html',
  styleUrl: "./login-input.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginInputComponent implements OnInit{
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private customToastService = inject(CustomToasterService);

  loginForm!: FormGroup;
  callBtnLoading = signal<boolean>(false);
  notExistingNumber = signal<boolean>(false)
  userTypes = signal<UserType[]>([
    {value: 'FIZ', viewValue: 'auth.login.userType.physical'},
    {value: 'YUR', viewValue: 'auth.login.userType.legal'},
  ]);


  public ngOnInit(): void {
    this.validateForm();
  }

  public validateForm(){
    this.loginForm = this.fb.nonNullable.group({
      userType: [this.userTypes()[0].value, Validators.required],
      phone: ['', Validators.required],
    });
  }

  onInputChange(){
    this.notExistingNumber.set(false);
  }

  onSubmit() {
    if (this.loginForm.valid){
      this.callBtnLoading.set(true);
      let { userType, phone } = this.loginForm.getRawValue();

      this.authService.userCheck(phone, userType).subscribe({
        next: res => {
          this.authService.setIdentity(res?.identity as unknown as string)
          if (res?.message) {
            this.router.navigate(['auth/otp', res.message]);
            this.notExistingNumber.set(false);
          } else {
            this.customToastService.showToast('auth.login.phone.error', 'error');
            this.notExistingNumber.set(true);
            setTimeout(() => {
              this.callBtnLoading.set(false);
            }, 3000)
          }
        },
        error: err => console.log(err)
      })
    }
  }

  public navigateToHomePage(){
    return this.router.navigate(['/'])
  }
}
