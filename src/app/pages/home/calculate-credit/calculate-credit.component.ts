import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {CustomCurrencyPipe} from "../../../shared/pipes/custom-currency.pipe";
import {TranslocoPipe} from "@jsverse/transloco";
import {CalculateService} from "./services/calculate.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CalculateModel} from "./models/calculate.model";

@Component({
  selector: 'app-calculate-credit',
  standalone: true,
  imports: [
    MatSliderModule,
    FormsModule,
    CommonModule,
    CustomCurrencyPipe,
    NgOptimizedImage,
    TranslocoPipe,
    ReactiveFormsModule
  ],
  templateUrl: './calculate-credit.component.html',
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
export class CalculateCreditComponent implements OnInit{

  step:number = 1;
  maxPrice: number = 100000000;
  minPrice: number = 1000000;
  price: number = 1000000;
  minYear: number = 3;
  maxYear: number = 60;
  maxPercent: number = 100000000;
  minPercent: number = 0;

  calcResults!: CalculateModel;

  interest: number | undefined = 0;
  totalPayment: number | undefined = 0;
  monthlyPayment: number | undefined = 0;

  calculatorForm!: FormGroup;

  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private calculateService = inject(CalculateService);

  public ngOnInit() {
    this.validateCalculatorForm();
  }

  public validateCalculatorForm(){
    this.calculatorForm = this.fb.group({
      amount: [1000000, Validators.required],
      term: [3, Validators.required],
      initialAmount: [1000000,Validators.required]
    })
  }

  onSliderChange(): void {
    console.log('Current Form Values:', this.calculatorForm.value);

    if (this.calculatorForm.valid) {
      this.calculateService.calculateData(this.calculatorForm.value)
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
      console.error('Form is invalid:', this.calculatorForm.errors);
    }
  }

}
