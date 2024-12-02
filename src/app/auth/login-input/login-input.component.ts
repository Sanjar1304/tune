import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject,
  output,
  signal
} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {NgClass, NgFor, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

import { AuthService } from '../services/auth.service';
import {CustomToasterService} from "../../core/services/utils/toast.service";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {NgxMaskDirective} from "ngx-mask";
import { Router } from '@angular/router';
import {TranslocoPipe} from "@jsverse/transloco";
import { UiSvgIconComponent } from '../../core/components/ui-svg-icon/ui-svg-icon.component';

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
    NgIf,
    NgStyle,
    NgClass,
    NgFor,
    NgOptimizedImage,
    NgxMaskDirective,
    MatIcon,
    MatProgressSpinner,
    TranslocoPipe,
    MatButton
  ],
  templateUrl: './login-input.component.html',
  styles: `
  :host {
    .wrong-number {
      color: #FF3333;
    }

    .right-number {
      color: #000000;
    }

    .error-message {
      color: #FF3333;
      font-size: 12px;
      margin: 0;
      padding: 0;
    }

    ::ng-deep {
        .mat-mdc-form-field {
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          overflow: hidden;
        }

        .mdc-text-field {
          border-radius: 10px;
        }

        .mat-mdc-form-field-infix {
          width: 210px;
        }

        .mat-mdc-text-field-wrapper {
          height: 48px;
        }

        .mat-mdc-select-arrow-wrapper {
          display: none;
        }

        .mat-mdc-form-field-bottom-align::before {
          display: none;
        }

        .mdc-text-field--no-label .mat-mdc-form-field-infix{
          padding-top: 12px;
          padding-bottom: 12px;
        }

        .mdc-text-field--filled:not(.mdc-text-field--disabled) {
          background: #fff;
        }

        .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after,
        .mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before{
          border-bottom-color: transparent;
        }

        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::after,
        .mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
          border-bottom-color: transparent;
        }

        .mat-mdc-button {
          border-radius: 10px;
        }

        .active.mat-mdc-button {
          background-color: #27c5d0;
        }

        .inactive.mat-mdc-button {
          background-color: #E5E7EA;
        }

        .active.mat-mdc-button .mdc-button__label {
          color: #fff;
          opacity: 1;
        }

        .inactive.mat-mdc-button .mdc-button__label {
          color: #B0B8C1;
          opacity: .5;
        }

        .mat-mdc-button>.mat-icon {
          width: fit-content;
          height: fit-content;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginInputComponent implements OnInit{

  loginForm!: FormGroup;
  callBtnLoading = signal<boolean>(false);
  notExistingNumber = signal<boolean>(false)


  userTypes = signal<UserType[]>([
    {value: 'FIZ', viewValue: 'физическое лицо'},
    {value: 'YUR', viewValue: 'юридическое лицо'},
  ]);

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private customToastService = inject(CustomToasterService);


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
          console.log(res?.identity)
          if (res?.message) {
            this.router.navigate(['auth/otp', res.message]);
            this.notExistingNumber.set(false);
          } else {
            this.customToastService.showToast('Written wrong number', 'error');
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
