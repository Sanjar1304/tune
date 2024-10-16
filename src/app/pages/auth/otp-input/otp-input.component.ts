import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import { NgClass, NgIf, NgStyle } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { NgOtpInputModule } from 'ng-otp-input';
import { Router } from '@angular/router';
import { UiSvgIconComponent } from '../../../core/components/ui-svg-icon/ui-svg-icon.component';

@Component({
  selector: 'app-otp-input',
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
    NgOtpInputModule
  ],
  templateUrl: './otp-input.component.html',
  styles: `
    :host {
      ::ng-deep {
        .ng-otp-input-wrapper {
          display: flex;
          justify-content: space-between;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpInputComponent implements OnInit {
  otpForm!: FormGroup;

  otp!: string | null;
  showOtpComponent = true;
  phone!: string | undefined;

  @Output() navigateToLogin = new EventEmitter<void>();
  @ViewChild('ngOtpInput') ngOtpInput: any;
  @Output() otpSuccess = new EventEmitter<void>();

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    inputStyles: {
      'width': '100px',
      'height': '100px',
      "padding": '8px',
      "border-radius":"12px",
      "border":"none",
      "background-color":"#F3F3F3",
      "outline":"none"
    }
  };

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);

  public ngOnInit(): void {
    this.validateOtpForm();
  }


  public validateOtpForm(): void {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]]
    });
  }


  public onSubmit(): void {
    if (this.otpForm.valid) {
      const code = this.otpForm.get('otp')?.value;
      const identity = this.authService.identity;
      this.otpSuccess.emit();

      if(identity){
        this.authService.sendOtpCode(identity, code).subscribe({
          next: (res) => {
            const isReg = res?.isReg || false;
            this.authService.setIsRegCheck(isReg);
            console.log(isReg)
          },
          error: err => console.log(err)
        })
      } else {
        console.log('OTP form is invalid:', this.otpForm.errors);
      }
    }
  }

  // Capture changes in the OTP input
  public onOtpChange(otp: string | null): void {
    this.otp = otp;
    // Set the OTP value in the form control
    this.otpForm.controls['otp'].setValue(otp);
  }

  // Set the value manually in the OTP input
  public setVal(val: any): void {
    this.ngOtpInput.setValue(val);
  }

  // Reset the OTP component configuration
  public onConfigChange(): void {
    this.showOtpComponent = false;
    this.otp = null;
    this.showOtpComponent = true;
  }

  // Navigate back to login
  public navigateToLoginMeth(): void {
    this.navigateToLogin.emit();
  }
}
