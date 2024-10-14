import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {TranslocoPipe} from "@jsverse/transloco";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from "@angular/material/slider";
import {MatRadioModule} from "@angular/material/radio";

import {CustomCurrencyPipe} from "../../../../../shared/pipes/custom-currency.pipe";


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
    TranslocoPipe,
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
export class CardDetailCalculatorComponent {
  step:number = 1;

  maxPrice: number = 100000000;
  minPrice: number = 1000000;
  price: number = 1000000;

  maxInitialPay = 100000000;
  minInitialPay = 1000000;
  pay = 1000000;

  maxYear = 60;
  minYear = 6;
  year = 0;

  readonly checked = model(false);
  readonly indeterminate = model(false);
  labelPosition = model<'Аннунитеный' | 'Дифференцированный'>('Аннунитеный');
  readonly disabled = model(false);
}
