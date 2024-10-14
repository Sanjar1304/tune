import {CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, Component, OnInit, inject, model} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatOption, MatSelect} from "@angular/material/select";
import {NgForOf, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

import { AddsService } from './services/ads.service';
import { BreadcrumbComponent } from "../../core/components/breadcrumb/breadcrumb.component";
import {MatCheckbox} from '@angular/material/checkbox';
import {MatFormField} from "@angular/material/form-field";
import {TranslocoPipe} from "@jsverse/transloco";
import {UiSvgIconComponent} from "../../core/components/ui-svg-icon/ui-svg-icon.component";

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ads-create',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    TranslocoPipe,
    RouterLink,
    MatCheckbox,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption,
    UiSvgIconComponent,
    BreadcrumbComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './ads-create.component.html',
  styles: `
    :host {
      ::ng-deep {
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AdsCreateComponent implements OnInit {

  carForm!: FormGroup;

  currentPath: {label: string, url: string}[] = [];
  readonly checked = model(false);
  readonly indeterminate = model(false);
  readonly carCredit = model(false);
  readonly checkbox1 = model(false);
  readonly checkbox2 = model(false);
  readonly checkbox3 = model(false);
  readonly checkbox4 = model(false);
  readonly checkbox5 = model(false);
  readonly checkbox6 = model(false);
  readonly checkbox7 = model(false);
  readonly checkbox8 = model(false);
  readonly checkbox9 = model(false);
  readonly checkbox10 = model(false);
  readonly checkbox11 = model(false);
  readonly checkbox12 = model(false);
  readonly checkbox13 = model(false);

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  private router = inject(Router);
  private adsService = inject(AddsService)


  public ngOnInit(): void {
      this.adsService.getCarInfos({ page: 0, size: 1}).subscribe((res) => {
        console.log(res)
      })
  }

  onSubmit(){
    console.log('salom')
  }

}
