import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {CustomCurrencyPipe} from "../../../shared/pipes/custom-currency.pipe";
import {TranslocoPipe} from "@jsverse/transloco";
import {CalculateService} from "./services/calculate.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {CalculateModel} from "./models/calculate.model";
import {CustomToasterService} from "../../../core/services/utils/toast.service";
import {ToastComponent} from "../../../core/components/toast/toast.component";

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
    ReactiveFormsModule,
    ToastComponent
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

  calculatorForm!: FormGroup;

  step = signal<number>(1);
  maxLoanAmount = signal<number>(100000000) ;
  minLoanAmount = signal<number>(1000000) ;
  price = signal<number>(1000000);
  minYear = signal<number>(3);
  maxYear = signal<number>(60);
  maxInitialPayment = signal<number>(100000000);
  minInitialPayment = signal<number>(0);
  calcResults = signal<CalculateModel | null>(null);
  interest = signal<number | undefined>(0) ;
  totalPayment = signal<number | undefined>(0);
  monthlyPayment = signal<number | undefined>(0);
  isPaymentExceeded = signal<boolean>(false);


  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private calculateService = inject(CalculateService);
  private toastService = inject(CustomToasterService)

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
    if (this.calculatorForm.valid) {
      this.calculateService.calculateData(this.calculatorForm.value)
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe({
          next: res => {
            if(res){
              this.isPaymentExceeded.set(false);
              this.calcResults.set(res);
              this.interest.set(res?.interest) ;
              this.monthlyPayment.set(res?.monthlyAmount.amount);
              this.totalPayment.set(res?.totalPaymentAmount.amount);
            } else  {
              this.isPaymentExceeded.set(true)
              this.toastService.showToast('Initial payment exceeded from loan amount !!!', 'error')
            }
          },
          error: err => console.error('Error in calculation:', err)
        });
    } else {
      console.error('Form is invalid:', this.calculatorForm.errors);
    }
  }

}
