import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  model, ViewChild,
} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatLabel, MatOption, MatSelect} from "@angular/material/select";
import {NgClass, NgFor, NgIf, TitleCasePipe} from '@angular/common';

import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormField} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import { Router } from '@angular/router';
import { SortingFormModel } from './models/sorting-form.model';
import { SortingService } from './services/sorting.service';
import { UiSvgIconComponent } from '../../../core/components/ui-svg-icon/ui-svg-icon.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {MatInput} from "@angular/material/input";
import {LanguageService} from "../../../core/services/utils/language.service";
import {TranslocoPipe} from "@jsverse/transloco";
import {CatalogDataService} from "../services/catalog-data.service";
import {CarCatalogRes} from "../../../core/constants/carCatalogRes";
import {SortingModel} from "../../home/sorting-models/models/sorting.model";


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
    MatLabel,
    NgFor,
    NgIf,
    MatInput,
    TranslocoPipe,
    TitleCasePipe,
    NgClass
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
  public carModels!:SortingModel[];
  public sortingCategories!: SortingFormModel[];
  public carModelMenu!: SortingModel[];
  public carModelsInfo!: CarCatalogRes;
  public selectedModelsInfo!: CarCatalogRes;
  public isSelectedPressed: boolean = false;
  public activeModel!: SortingModel;

  pricingFrom!: FormGroup;
  @ViewChild('sortingForm') form!: NgForm;
  sortingFormSelections: Array<{ filterId: number, value: string, componentType: string }> = [];


  private router = inject(Router);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private destroy$ = inject(DestroyRef);
  private sortingService = inject(SortingService);
  private languageService = inject(LanguageService);
  private catalogDataService = inject(CatalogDataService);


  public ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(() => {
      this.getSortingModelFormSubscription();
      this.validatePricingForm();
      this.getButtons();
      this.getSortingFormButtons();
    })
  }

  public validatePricingForm(){
    this.pricingFrom = this.fb.group({
      vinNomer: ['',[ Validators.required, Validators.minLength(5)]],
      probeg: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]]
    })
  }

  public getButtons(){
    this.sortingService.getModels()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carModels = res as unknown as SortingModel[];
          this.carModelMenu = this.carModels.filter(val => val.type === 'USING_STATE');
          console.log(this.carModelMenu);
          if(this.carModelMenu.length > 0){
            const selectedModel = this.carModelMenu[0];
            this.selectedActiveButton(selectedModel.type, selectedModel.value)
          }
          this.isSelectedPressed = false;
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      });
  }

  public getSortingFormButtons(isInitialLoad: boolean = false) {
    const filterStatic = isInitialLoad ? { type: "USING_STATE", value: "-1" } : undefined;
    this.sortingService.getButtonsName({ query: '', filterStatic }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carModelMenu = this.carModels.filter(val => val.type === 'USING_STATE');
          if (isInitialLoad) {
            this.carModelsInfo = res as CarCatalogRes;
          } else {
            this.selectedModelsInfo = res as CarCatalogRes;
            this.isSelectedPressed = true;
          }
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      })

  }

  public getSortingModelFormSubscription(){
    this.sortingService.getSortingForm()
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe({
      next: res => {
        this.sortingCategories = res as unknown as SortingFormModel[];
        this.sortingFormSelections = this.sortingCategories.map((category) => ({
          filterId: category.id,
          value: '',
          componentType: category.componentType
        }));
        this.cdr.detectChanges();
      },
      error: err => console.log(err),

    })
  }

  public onSubmit(){
    const filters = this.sortingFormSelections
      .filter(selection => selection.value)
      .map(selection => {
        const category = this.sortingCategories.find(cat => cat.id === selection.filterId);
        if (!category) return null; // Skip if no matching category found

        switch (category.componentType) {
          case 'SELECT':
            const selectedOption = category.values.find(val => val.value === selection.value);
            return selectedOption ? { filterId: selection.filterId, value: selectedOption.id } : null;

          case 'MULTI_SELECT':
            const multiSelectedOptions = selection.value.split(',').map((val: string) => {
              const option = category.values.find(opt => opt.value === val.trim());
              return option ? option.id : null;
            }).filter(id => id !== null);
            return multiSelectedOptions.length ? { filterId: selection.filterId, multiValues: multiSelectedOptions } : null;

          case 'TEXT':
            return { filterId: selection.filterId, value: selection.value };

          case 'ARRANGE':
            const [from, to] = selection.value.split('-').map(Number);
            if (!isNaN(from) && (isNaN(to) || from === to)) {
              return { filterId: selection.filterId, from };
            } else if (!isNaN(from) && !isNaN(to)) {
              return { filterId: selection.filterId, from, to };
            }
            return null;

          default:
            return null;
        }
      })
      .filter(filter => filter !== null);

    const requestData = {
      query: '',  // Add your query parameter here as needed
      filters: filters,
      facet: null,
      paging: { page: 0, size: 10 }
    };

    this.sortingService.sortedCatalogCards(requestData)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          if(res){
            this.catalogDataService.updateCatalogData(res);
          }
          this.cdr.detectChanges()
        },
        error: err => console.error(err)
      });
  }

  public pricingSubmit(){
    console.log(this.pricingFrom.value)
  }

  public selectedActiveButton(type: string, value: string) {
    const selectedModel = this.carModelMenu.find(model => model.type === type && model.value === value);
    if (selectedModel) {
      this.activeModel = selectedModel;
      this.cdr.markForCheck();
    }
  }


  public remainSelectedModel(menu: SortingModel) {
    this.activeModel = menu;
  }
}
