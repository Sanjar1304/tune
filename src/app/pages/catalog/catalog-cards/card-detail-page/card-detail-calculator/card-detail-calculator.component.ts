import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, model, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from "@angular/material/slider";
import {MatRadioModule} from "@angular/material/radio";

import {CustomCurrencyPipe} from "../../../../../shared/pipes/custom-currency.pipe";
import {TranslocoPipe} from "@jsverse/transloco";
import {CalculateService} from "../../../../home/calculate-credit/services/calculate.service";
import {QuestionService} from "../../../../home/question-form/services/question.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CalculateModel} from "../../../../home/calculate-credit/models/calculate.model";


@Component({
  selector: 'app-card-detail-calculator',
  standalone: true,
  imports: [
    MatSliderModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
    CustomCurrencyPipe,
    NgOptimizedImage,
    TranslocoPipe,
    ReactiveFormsModule,
  ],
  templateUrl: './card-detail-calculator.component.html',
  styles: `
    :host {
      ::ng-deep .mat-mdc-slider {
        width: 100%;
        margin: 0;
      }

      ::ng-deep .mdc-slider__track {
        color: #27C5D0 !important;
      }

      ::ng-deep .mat-slider-track-fill {
        background-color: #27C5D0 !important;
      }

      ::ng-deep .mdc-slider__track--active_fill{
        border-color: #27C5D0 !important;
      }

      ::ng-deep .mdc-slider__track--inactive {
        background-color: #C8C8C8 !important;
      }

      ::ng-deep .mdc-slider__track--inactive::before {
        background-color: #C8C8C8 !important;
      }

      ::ng-deep .mat-slider-thumb {
        background-color: #27C5D0 !important;
      }

      ::ng-deep .mat-slider-thumb-label {
        background-color: #27C5D0 !important;
      }

      ::ng-deep .mdc-slider__thumb-knob {
        width: 25px !important;
        height: 6px !important;
        border-radius: 8px;
        border-color: #27C5D0;
        background-color: #27C5D0;
      }

      ::ng-deep .mdc-slider__thumb-knob:active {
        border-color: #27C5D0;
      }

      ::ng-deep .mdc-slider__thumb-knob:focus {
        background-color: #27C5D0 !important;
        border-color: #27C5D0 !important;
      }

      ::ng-deep .mdc-slider__thumb-knob:hover {
        background-color: #27C5D0 !important;
        border-color: #27C5D0 !important;
      }

      ::ng-deep .mdc-slider__thumb-knob:focus-within {
         background-color: #27C5D0 !important;
         border-color: #27C5D0 !important;
      }

      ::ng-deep .mat-mdc-slider-visual-thumb {
        border-color: #27C5D0;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailCalculatorComponent implements OnInit{
  step:number = 1;
  id: string | null = '';

  calcResults!: CalculateModel;

  interest: number | undefined = 0;
  totalPayment: number | undefined = 0;
  monthlyPayment: number | undefined = 0;

  maxPrice: number = 100000000;
  minPrice: number = 1000000;
  price: number = 1000000;
  maxInitialPay = 100000000;
  minInitialPay = 1000000;
  pay = 1000000;
  maxYear = 60;
  minYear = 6;

  calculateForm!: FormGroup;
  applicationForm!:FormGroup;

  readonly checked = model(false);
  readonly indeterminate = model(false);
  labelPosition = model<'Аннунитеный' | 'Дифференцированный'>('Аннунитеный');
  readonly disabled = model(false);


  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private calculateService = inject(CalculateService);
  private questionService = inject(QuestionService);
  private activatedRoute = inject(ActivatedRoute);

  public ngOnInit() {
    this.validateCalculateForm();
    this.validateApplicationForm();
  }

  public validateCalculateForm(){
    this.calculateForm = this.fb.group({
      amount: [1000000, Validators.required],
      term: [3, Validators.required],
      initialAmount: [1000000,Validators.required]
    })
  }

  public validateApplicationForm(){
    this.applicationForm = this.fb.group({
      fullName: ['',[ Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  public onSliderChange(){
    console.log('Current Form Values:', this.calculateForm.value);

    if (this.calculateForm.valid) {
      this.calculateService.calculateData(this.calculateForm.value)
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe({
          next: res => {
            this.calcResults = res as unknown as CalculateModel;
            this.interest = res?.interest;
            this.monthlyPayment =  res?.monthlyAmount.amount;
            this.totalPayment = res?.totalPaymentAmount.amount;
            this.cdr.detectChanges();
          },
          error: err => console.error('Error in calculation:', err)
        });
    } else {
      console.error('Form is invalid:', this.calculateForm.errors);
    }
  }


  public applicationSubmit(){
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
    })

    const reqBod = {
      fullName: this.applicationForm.get('fullName')?.value,
      phoneNumber: this.applicationForm.get('phone')?.value,
      email: this.applicationForm.get('email')?.value,
      productId: this.id,
      productType: 'ALL'
    }

    if (this.applicationForm.valid) {
      this.questionService.sendQuestion(reqBod)
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe({
          next: res => {
            console.log(res);
            this.applicationForm.reset();
            this.cdr.detectChanges();
          },
          error: err => console.error('Error in calculation:', err)
        });
    } else {
      console.error('Form is invalid:', this.applicationForm.errors);
    }
  }
}
