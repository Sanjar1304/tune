import {
  ChangeDetectionStrategy,
  Component, DestroyRef, inject, OnInit, signal,
} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {CustomToasterService} from "../../core/services/utils/toast.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgClass} from "@angular/common";
import {NgxMaskDirective} from "ngx-mask";
import {TranslocoPipe} from "@jsverse/transloco";
import {MatButton} from "@angular/material/button";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatIcon} from "@angular/material/icon";


@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  styleUrl: './reset-password.component.scss',
  standalone: true,
  imports: [
    NgClass,
    NgxMaskDirective,
    TranslocoPipe,
    ReactiveFormsModule,
    MatButton,
    MatIcon,
    MatProgressSpinner
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResetPasswordComponent implements OnInit {
  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef)
  private authService = inject(AuthService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private customToastService = inject(CustomToasterService);

  isPhoneForm!: FormGroup;
  callBtnLoading = signal<boolean>(false);
  notExistingNumber = signal<boolean>(false);
  phoneNumber = signal<string | null>(null);
  error_messages = {
    'phone': [{type: 'required', message: 'errorMessages.phoneErrors.required'}],
  }

  ngOnInit(): void {
    this.validatePasswordForm();
  }

  validatePasswordForm(): void {
    this.isPhoneForm = this.fb.nonNullable.group({
      phone: ['', Validators.required],
    });
  }

  onInputChange(){
    this.notExistingNumber.set(false);
  }

  onSubmit(): void {
    if (this.isPhoneForm.valid) {
      this.callBtnLoading.set(true);
      const phone = this.isPhoneForm.get('phone')?.value;
      this.authService.sendResetCheck(phone)
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe({
          next: res => {
            this.authService.setIdentity(res?.identity as unknown as string);
            if (res) {
              this.router.navigate(['auth/otp', res.message], { fragment: 'reset'});
              this.notExistingNumber.set(false);
            } else {
              this.customToastService.showToast('errorMessages.phoneErrors.wrongNumber', 'error');
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


  public navigateToPasswordPage(){
    this.router.navigate(['auth/password']);
  }

}
