import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage, NgStyle} from "@angular/common";
import {QuestionService} from "./services/question.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {TranslocoPipe} from "@jsverse/transloco";


import {CustomToasterService} from "../../../core/services/utils/toast.service";
import {ToastComponent} from "../../../core/components/toast/toast.component";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {NgxMaskDirective} from "ngx-mask";
import {finalize} from "rxjs";
import {MatIcon} from "@angular/material/icon";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-question-form',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    TranslocoPipe,
    ToastComponent,
    NgIf,
    MatInput,
    MatCheckbox,
    NgxMaskDirective,
    MatIcon,
    MatProgressSpinner,
    MatButton,
    NgClass,
    NgStyle,
  ],
  templateUrl: './question-form.component.html',
  styles: `
     :host {
       .inactive-btn {
         color: #626262;
       }

       ::ng-deep {
         .mdc-checkbox__background {
           border-radius: 4px;
           border: 1px solid #fff;
         }

         .mat-internal-form-field>label {
           color: #fff;
         }

         .active.mat-mdc-button .mdc-button__label {
           color: #000;
           opacity: 1;
         }

         .inactive.mat-mdc-button .mdc-button__label {
           color: #ccc;
           opacity: .5;
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

         .mat-mdc-button {
           width: 250px;
           border-radius: 10px;
           background-color: #fff;
         }

         .mat-mdc-button>.mat-icon {
           overflow: visible;
         }

         .mat-mdc-button .mdc-button__label {
           display: flex;
           color: #000;
           font-size: 16px;
           font-weight: 400;
         }

         .mat-mdc-button>.mat-icon {
           display: flex;
         }

         .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
           stroke: #27C5D0;
         }
       }
     }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionFormComponent implements OnInit{

  questionForm!: FormGroup;
  callBtnLoading = signal<boolean>(false)


  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private toasterService = inject(CustomToasterService);
  private questionService = inject(QuestionService);


  public ngOnInit(){
    this.questionForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phoneNumber: ['', [Validators.required]], // Ensure required validator
      isChecked: [false, Validators.requiredTrue]
    });
  }


  public subscribeQuestion(form: FormGroup) {

    if (this.questionForm.valid) {
      this.callBtnLoading.set(true);
      const fullName = this.questionForm.get('fullName')?.value;
      let phoneNumber = this.questionForm.get('phoneNumber')?.value;

      this.questionService.sendQuestion({
        fullName,
        phoneNumber,
        email: null,
        productId: null,
        productType: 'ALL'
      })
        .pipe(takeUntilDestroyed(this.destroy$), finalize(() => this.callBtnLoading.set(false)))
        .subscribe({
          next: res => {
            if (res.success) {
              this.toasterService.showToast('Successfully sent application', 'success');
              this.questionForm.reset();
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
