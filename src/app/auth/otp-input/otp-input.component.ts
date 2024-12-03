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
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

import { AuthService } from '../services/auth.service';
import { NgOtpInputModule } from 'ng-otp-input';
import {ActivatedRoute, Router} from '@angular/router';
import { UiSvgIconComponent } from '../../core/components/ui-svg-icon/ui-svg-icon.component';
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatButton} from "@angular/material/button";
import {debounceTime, interval, takeWhile, tap} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CustomToasterService} from "../../core/services/utils/toast.service";

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
    MatButton,
    NgForOf
  ],
  templateUrl: './otp-input.component.html',
  styleUrl: './otp-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtpInputComponent implements OnInit {

  private fb = inject(FormBuilder);
  private router = inject(Router)
  private destroy$ = inject(DestroyRef);
  private activatedRoute = inject(ActivatedRoute);
  private authService = inject(AuthService);
  private toastService = inject(CustomToasterService)

  otpForm!: FormGroup;

  otp!: string | null;
  otpInputs: string[] = Array(6).fill('');
  phoneNumber = signal<string | null>(null);
  callBtnLoading = signal<boolean>(false);
  otpNumberColor = signal<boolean | null>(null);
  timer = signal<number>(60);
  timerInterval = interval(1000);
  identity = signal<string>('');
  counter = 0;


  public ngOnInit(): void {
    this.validateOtpForm();

    this.activatedRoute.paramMap.subscribe((params) => {
      const phoneNumber = params.get('phoneNumber');
      this.phoneNumber.set(phoneNumber);
    });


    this.validateOtpForm();
    this.startTimer();
    this.activatedRoute.paramMap.subscribe((params) => {
      const phoneNumber = params.get('phoneNumber');
      this.phoneNumber.set(phoneNumber || null);
    });

    this.authService.hasIdentity$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(res => this.identity.set(res))
  }


  public validateOtpForm(): void {
    this.otpForm = this.fb.group({
      otp: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]+$')]]
    });
  }

  startTimer(): void {
      this.timerInterval
        .pipe(
          takeWhile(() => this.timer() > 0),
          tap(() => this.timer.update(value => value - 1)),
          takeUntilDestroyed(this.destroy$))
        .subscribe()
  }


  onOtpInput(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (/^\d$/.test(value)) {
      this.otpInputs[index] = value;
      const nextInput = input.nextElementSibling as HTMLInputElement | null;
      if (nextInput) nextInput.focus();
    } else {
      this.otpInputs[index] = '';
      input.value = '';
    }

    if (input.value === '') {
      this.otpNumberColor.set(null);
    }
    this.updateOtpFormValue();
  }


  onKeydown(event: KeyboardEvent, index: number): void {
    const input = event.target as HTMLInputElement;
    if (event.key === 'Backspace' && input.value === '') {
      const prevInput = input.previousElementSibling as HTMLInputElement | null;
      if (prevInput) prevInput.focus();
    }
  }

  updateOtpFormValue(): void {
    const otp = this.otpInputs.join('');
    this.otpForm.controls['otp'].setValue(otp);
  }


  onSubmit(): void {
    if (this.otpForm.valid) {
      const code = this.otpForm.controls['otp'].value;
      this.callBtnLoading.set(true);
      this.authService.sendOtpCode(this.identity(), code)
          .pipe(takeUntilDestroyed(this.destroy$))
          .subscribe({
            next: res => {
              this.otpNumberColor.set(this.authService.otpSuccess || false);
              if(this.authService.otpSuccess === false) this.toastService.showToast('wrong number written', 'error')
              this.counter++;
              this.callBtnLoading.set(false);
              if(this.counter <= 3){
                if(res?.identity){
                  const isReg = res?.isReg || false;
                  this.authService.setIsRegCheck(isReg);
                  this.router.navigate(['auth/password']);
                }
              } else {
                this.router.navigate(['auth/login']);
              }
            },
            error: err => {
              this.toastService.showToast(`${err}`, 'error')
              this.callBtnLoading.set(false);
              this.otpNumberColor.set(false);
            }
          })
    }
  }

  resendOtp(): void {
    if (this.timer() === 0) {
      this.timer.set(60);
      this.startTimer();

      this.otpInputs = Array(6).fill('');
      this.otpForm.controls['otp'].setValue('');
      this.otpNumberColor.set(null);

      this.authService.resendOtp(this.identity())
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe()
    }
  }


  public navigateToLogin(){
    this.router.navigate(['auth/login'])
  }

  trackByIndex(index: number, item: string): number {
    return index;
  }
}
