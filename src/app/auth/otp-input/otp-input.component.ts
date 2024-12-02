import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
  inject,
  HostListener, input, output, signal, computed, DestroyRef, effect
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import { NgClass, NgIf, NgStyle } from '@angular/common';

import { AuthService } from '../services/auth.service';
import { NgOtpInputModule } from 'ng-otp-input';
import {ActivatedRoute, Router} from '@angular/router';
import { UiSvgIconComponent } from '../../core/components/ui-svg-icon/ui-svg-icon.component';
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatButton} from "@angular/material/button";
import {interval, takeWhile, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

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
    NgOtpInputModule,
    MatIcon,
    MatProgressSpinner,
    MatButton
  ],
  templateUrl: './otp-input.component.html',
  styles: `
    :host {
      .wrong-number {
        color: #FF3333;
        border-color: #FF3333;
      }

      .right-number {
        color: #05BC74;
      }

      .default-color {
        color: #000
      }

      ::ng-deep {
        .ng-otp-input-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 8px;
        }
        .ng-otp-input-wrapper input {
          flex: 1;
          min-width: 40px;
          max-width: 80px;
          height: 10vw; /* Height proportional to the viewport width */
          font-size: 1.5vw; /* Font size proportional to the viewport width */
          text-align: center;
        }

        .resend-otp.mat-mdc-button {
          background-color: #27c5d0;
          color: #fff;
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

        @media (min-width: 768px) {
          .ng-otp-input-wrapper input {
            height: 5vw; /* Smaller size for larger screens */
            font-size: 1.2vw;
          }
        }

        @media (min-width: 1024px) {
          .ng-otp-input-wrapper input {
            height: 5vw; /* Further adjust for wider screens */
            font-size: 1vw;
          }
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpInputComponent implements OnInit {
  otpForm!: FormGroup;

  otp!: string | null;
  phoneNumber = signal<string | null>(null);
  callBtnLoading = signal<boolean>(false);
  otpNumberColor = signal<boolean>(false);
  timer = signal<number>(60);
  timerInterval = interval(1000);
  identity = signal<string>('');
  counter = signal<number>(3);
  wrongOTPNumber = signal<boolean>(false);

  @ViewChild('ngOtpInput') ngOtpInput: any;

  config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    inputStyles: {
      "padding": '8px',
      "border-radius":"12px",
      "border":"none",
      "background-color":"#F3F3F3",
      "outline":"none",
    }
  };

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private destroy$ = inject(DestroyRef);
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);

  public ngOnInit(): void {
    this.validateOtpForm();

    this.activatedRoute.paramMap.subscribe((params) => {
      const phoneNumber = params.get('phoneNumber'); // Retrieve the parameter
      this.phoneNumber.set(phoneNumber); // Set the signal value
    });

    this.timerFunction();

    this.authService.hasIdentity$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(res => this.identity.set(res))
  }


  public validateOtpForm(): void {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]]
    });
  }

  timerFunction(){
    this.timerInterval
      .pipe(
        takeWhile(() => this.timer() > 0),
        tap(() => this.timer.update(value => value - 1)),
        takeUntilDestroyed(this.destroy$))
      .subscribe({
        // complete: () => console.log('Timer completed.')
      })
  }


  public onSubmit(): void {
    if (this.otpForm.valid) {
      this.callBtnLoading.set(true);
      const code = this.otpForm.get('otp')?.value;

      if(this.identity()){
        this.otpNumberColor.set(false);
        this.authService.sendOtpCode(this.identity(), code).subscribe({
          next: (res) => {
            if(res?.identity){
              this.callBtnLoading.set(false);
              const isReg = res?.isReg || false;
              console.log(this.identity());
              this.authService.setIsRegCheck(isReg);
              this.router.navigate(['auth/password']);
            }
          },
          error: err => console.log(err)
        })
      } else {
        this.otpNumberColor.set(true);
      }
    }
  }

  public resendOtp(){
    if(this.timer() <= 0){
      this.authService.resendOtp(this.identity())
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe(res => {
          this.otpForm.reset();
          console.log(res)
        })
      this.timer.set(60);
      this.timerFunction();
    }
  }

  public onOtpChange(otp: string | null): void {
    this.otp = otp;
    this.otpForm.controls['otp'].setValue(otp);
    this.otpNumberColor.set(false);
  }

  public navigateToLogin(){
    this.router.navigate(['auth/login'])
  }
}
