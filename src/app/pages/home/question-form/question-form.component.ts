import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {QuestionService} from "./services/question.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule, ValidationErrors,
  Validators
} from "@angular/forms";
import {TranslocoPipe} from "@jsverse/transloco";

import {BackendResponseModel} from "../../../core/models/backend-response.model";
import {CustomToasterService} from "../../../core/services/utils/toast.service";
import {ToastComponent} from "../../../core/components/toast/toast.component";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [NgOptimizedImage, ReactiveFormsModule, FormsModule, TranslocoPipe, ToastComponent, NgIf, MatInput, MatCheckbox],
  templateUrl: './question-form.component.html',
  styles: `
     :host {
       ::ng-deep {
         .mdc-checkbox__background {
           border-radius: 4px;
           border: 1px solid #fff;
         }

         .mat-internal-form-field>label {
           color: #fff;
         }

         .mdc-checkbox:hover .mdc-checkbox__ripple {
           background-color: transparent !important;
         }

         .mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple {
           background-color: transparent !important;
         }

         .mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple {
           background-color: transparent !important;
         }

         .mdc-checkbox__native-control:active:enabled:checked~.mdc-checkbox__background {
           background-color: #060563;
           border-color: #060563;
         }

         .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background {
           background-color: #060563;
           border-color: #060563;
         }
       }
     }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFormComponent implements OnInit{

  questionForm!: FormGroup;
  isButtonChecked: boolean = false;
  phoneNumberValue: string = '998 '; // Starting format
  phoneNumberHasError: boolean = false;
  phoneNumberError: string = '';

  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private toasterService = inject(CustomToasterService);
  private questionService = inject(QuestionService);


  public ngOnInit(){
    this.questionForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required, this.phoneValidator()]],
      isChecked: [false, Validators.requiredTrue]
    })
    this.isCheckboxClicked();
  }

  public phoneValidator() {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && !/^998\d{9}$/.test(control.value.replace(/\D/g, ''))) {
        return { invalidPhone: true };
      }
      return null;
    };
  }

  public isCheckboxClicked() {
    this.isButtonChecked = !this.isButtonChecked;
  }

  public onPhoneKeyup(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (value.length < 5) {
      value = '998 ';
    }
    this.phoneNumberValue = value;
    this.questionForm.get('phoneNumber')?.setValue(value, { emitEvent: false });
  }

  public setInitialPhoneValue() {
    const phoneControl = this.questionForm.get('phoneNumber');
    if (phoneControl && !phoneControl.value) {
      this.phoneNumberValue = '998 ';
      phoneControl.setValue(this.phoneNumberValue);
    }
  }

  public onPhoneBlur() {
    const phoneControl = this.questionForm.get('phoneNumber');
    if (!phoneControl) return;

    let digitsOnly = phoneControl.value.replace(/\D/g, '').substring(3); // Remove "+998 " prefix
    const formattedValue = '998 ' +
      (digitsOnly.slice(0, 2) || '') + ' ' +
      (digitsOnly.slice(2, 5) || '') + '-' +
      (digitsOnly.slice(5, 7) || '') + '-' +
      (digitsOnly.slice(7, 9) || '');

    this.phoneNumberValue = formattedValue;
    phoneControl.setValue(formattedValue, { emitEvent: false });

    this.phoneNumberHasError = digitsOnly.length < 9;
    this.phoneNumberError = this.phoneNumberHasError ? 'Phone number must be fully completed.' : '';
  }

  public subscribeQuestion(form: FormGroup) {
    console.log('Form Valid:', form.valid);
    console.log('isChecked Valid:', form.get('isChecked')?.valid);
    console.log('isChecked Touched:', form.get('isChecked')?.untouched);

    // if (this.questionForm.get('fullName')?.touched &&
    //     this.questionForm.get('phoneNumber')?.touched &&
    //     this.questionForm.get('isChecked')?.untouched) {
    //   this.toasterService.showToast('Checkbox is not pressed', 'error')
    //   this.isButtonChecked = false
    // }

    if (this.questionForm.valid) {
      const fullName = this.questionForm.get('fullName')?.value;
      let phoneNumber = this.questionForm.get('phoneNumber')?.value;
      const digitsOnly = phoneNumber.replace(/\D/g, '');
      if (digitsOnly.startsWith('998')) {
        phoneNumber = digitsOnly;
      } else {
        phoneNumber = `998${digitsOnly.slice(3)}`;
      }

      this.questionService.sendQuestion({
        fullName,
        phoneNumber,
        email: null,
        productId: null,
        productType: 'ALL'
      })
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe({
          next: res => {
            if (res.success) {
              this.toasterService.showToast('Successfully sent application', 'success');
              this.questionForm.reset();
              this.cdr.detectChanges();
            }
          },
          error: err => this.toasterService.showToast(err,'error')
      });
    }
  }

  onCheckboxChange() {
    this.questionForm.get('isChecked')?.markAsTouched();
  }
}
