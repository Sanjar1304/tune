import {ChangeDetectionStrategy, Component, Pipe} from '@angular/core';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {CustomCurrencyPipe} from "../../../shared/pipes/custom-currency.pipe";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-calculate-credit',
  standalone: true,
  imports: [
    MatSliderModule,
    FormsModule,
    CommonModule,
    CustomCurrencyPipe,
    TranslocoPipe
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
export class CalculateCreditComponent {
  step:number = 1;

  maxPrice: number = 100000000;
  minPrice: number = 1000000;
  price: number = 1000000;

  minYear = 0;
  maxYear = 15;
  year = 0;

  maxPercent = 50;
  minPercent = 0;
  firstPay = 0;


  // formatCurrency(value: number, currencyCode: string = 'UZS'): string {
  //   const formattedValue = value.toLocaleString('en-US').replace(/,/g, ' ');
  //   return `${formattedValue} ${currencyCode}`;
  // }
}
