import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormField, MatOption, MatSelect} from "@angular/material/select";
import {NgClass, NgFor, NgIf, NgOptimizedImage, NgStyle} from '@angular/common';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UiSvgIconComponent } from '../../../core/components/ui-svg-icon/ui-svg-icon.component';

interface Food {
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
    NgOptimizedImage
  ],
  templateUrl: './login-input.component.html',
  styles: `
  :host {
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
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginInputComponent {

  loginForm!: FormGroup;
  @Output() loginSuccess = new EventEmitter<void>();

  foods: Food[] = [
    {value: 'FIZ', viewValue: 'физическое лицо'},
    {value: 'YUR', viewValue: 'юридическое лицо'},
  ];

  private router = inject(Router);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private authService = inject(AuthService);


  public ngOnInit(): void {
    this.validateForm();
  }

  public validateForm(){
    this.loginForm = this.fb.nonNullable.group({
      userType: [this.foods[0].value, Validators.required], // Set the first food's value as the default
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Ensure digits only
    });
  }

  public isPasswordValid(): boolean {
    const phone = this.loginForm.get('phone')?.value;
    return /^[0-9]+$/.test(phone);
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.loginSuccess.emit();
    let { userType, phone } = this.loginForm.getRawValue();

    this.authService.userCheck(phone, userType).subscribe({
      next: res => {
        if(res?.message)
        console.log(res);
      },
      error: err => console.log(err)
    })
  }

  public navigateToHomePage(){
    return this.router.navigate(['/'])
  }
}
