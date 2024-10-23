import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  model,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import { NgFor, NgIf } from '@angular/common';

import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormField} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import { Router } from '@angular/router';
import { SortingFormModel } from './models/sorting-form.model';
import { SortingService } from './services/sorting.service';
import { UiSvgIconComponent } from '../../../core/components/ui-svg-icon/ui-svg-icon.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-catalog-sorting',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    UiSvgIconComponent,
    MatSelect,
    MatOption,
    MatFormField,
    NgFor,
    NgIf
  ],
  templateUrl: './catalog-sorting.component.html',
  styles: `
    :host {
      ::ng-deep {
        .mat-mdc-radio-button .mdc-radio__outer-circle {
          border-radius: 5px;
        }

        .mdc-label {
          color: #A1A1A1;
        }

        .mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle {
          border-color: #A1A1A1;
        }

        .mdc-checkbox__background {
          border-radius: 4px;
          border: 1px solid #B0B8C1;
        }

        .mdc-checkbox:hover .mdc-checkbox__ripple {
          background-color: transparent !important;
        }

        .mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background, .mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{
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

        .custom-sena-form {
          height: 30px !important;
          width: 75px !important;
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

        .custom-sena-form .mdc-text-field {
          border-radius: 6px;
        }

        .custom-sena-form .mdc-text-field {
          padding: 0 7px;
        }

        .custom-sena-form .mdc-text-field--no-label .mat-mdc-form-field-infix{
          padding-top: 5px;
        }

        .custom-sena-form .mdc-text-field--filled:not(.mdc-text-field--disabled) {
          background-color: #E5E7EA !important;
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
export class CatalogSortingComponent implements OnInit{

  readonly checked = model(false);
  readonly indeterminate = model(false);
  labelPosition = model<'Торг есть' | 'Автосалон' | 'C фото'>('Торг есть');
  readonly disabled = model(false);
  formModel: null | SortingFormModel[] = null;

  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private destroy$ = inject(DestroyRef);
  private sortingService = inject(SortingService);


  public ngOnInit(): void {
    this.getSortingModelFormSubscription();
  }

  public getSortingModelFormSubscription(){
    this.sortingService.getSortingForm()
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe({
      next: res => {
        this.formModel = res as unknown  as SortingFormModel[];
      },
      error: err => console.log(err),
      complete:()=>{
        this.cdr.detectChanges()
      }
    })
  }
}
