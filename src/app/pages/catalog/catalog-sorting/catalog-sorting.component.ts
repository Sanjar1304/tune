import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  model, ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatLabel, MatOption, MatSelect } from "@angular/material/select";
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormField } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { Router } from '@angular/router';
import { SortingFormModel, SortingFormSelection } from './models/sorting-form.model';
import { SortingService } from './services/sorting.service';
import { UiSvgIconComponent } from '../../../core/components/ui-svg-icon/ui-svg-icon.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInput } from "@angular/material/input";
import { LanguageService } from "../../../core/services/utils/language.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { CatalogDataService } from "../services/catalog-data.service";
import { CarCatalogRes } from "../../../core/constants/carCatalogRes";
import { SortingModel } from "../../home/sorting-models/models/sorting.model";


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
  styleUrl: "./catalog-sorting.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogSortingComponent implements OnInit {
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private destroy$ = inject(DestroyRef);
  private sortingService = inject(SortingService);
  private languageService = inject(LanguageService);
  private catalogDataService = inject(CatalogDataService);

  @ViewChild('sortingForm') form!: NgForm;


  readonly checked = model(false);
  readonly indeterminate = model(false);
  labelPosition = model<'Торг есть' | 'Автосалон' | 'C фото'>('Торг есть');
  readonly disabled = model(false);
  public carModels!: SortingModel[];
  public sortingCategories!: SortingFormModel[];
  public carModelMenu!: SortingModel[];
  public carModelsInfo!: CarCatalogRes;
  public selectedModelsInfo!: CarCatalogRes;
  public isSelectedPressed: boolean = false;
  public activeModel!: SortingModel;
  public pairFilterID: number | undefined = 0
  pricingFrom!: FormGroup;
  sortingFormSelections: SortingFormSelection[] = [];

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(() => {
      this.getSortingModelFormSubscription();
      this.validatePricingForm();
      this.getButtons();
      this.getSortingFormButtons();
    })

    this.catalogDataService.triggerSortingRequest$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((paging) => {
        this.onSubmit(paging.page, paging.size);
      });
    this.cdr.detectChanges()
  }

  public validatePricingForm() {
    this.pricingFrom = this.fb.group({
      vinNomer: ['', [Validators.required, Validators.minLength(5)]],
      probeg: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]]
    })
  }

  public getButtons() {
    this.sortingService.getModels()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carModels = res as unknown as SortingModel[];
          this.carModelMenu = this.carModels.filter(val => val.type === 'USING_STATE');
          if (this.carModelMenu.length > 0) {
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
    this.sortingService.getButtonsName({ query: '', filterStatic }, { page: 0, size: 0 })
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

  public getSortingModelFormSubscription() {
    this.sortingService.getSortingForm()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.sortingCategories = res as unknown as SortingFormModel[];
          this.sortingFormSelections = this.sortingCategories.map((category) => {
            const selection: SortingFormSelection = {
              from: "", to: "", value: "",
              filterId: category.id,
              componentType: category.componentType,
              pairFilter: category.pairFilter ? {
                filterId: category.pairFilter.id, // Ensure pairFilter.filterId is set correctly
                title: category.pairFilter.title,
                regexp: category.pairFilter.regexp || '',
                componentType: category.pairFilter.componentType,
                placeholder: category.pairFilter.placeholder,
                pairFilter: category.pairFilter.pairFilter || null,
                values: category.pairFilter.values || []  // Ensure pairFilter values are correctly set
              } : undefined
            };

            this.pairFilterID = selection.pairFilter?.filterId;

            // For 'ARRANGE' component type, initialize `from` and `to`
            if (category.componentType === 'ARRANGE') {
              selection.from = '';
              selection.to = '';
            } else {
              selection.value = ''; // Initialize value for other component types
            }

            return selection;
          });

          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      });
  }


  public onSubmit(page: number = 0, size: number = 10) {
    const filters = this.sortingFormSelections
      .filter(selection => selection.value || selection.from || selection.to) // Filter out empty selections
      .map(selection => {
        const category = this.sortingCategories.find(cat => cat.id === selection.filterId);
        if (!category) return null; // Skip if no matching category found

        switch (category.componentType) {
          case 'SELECT':
            return this.handleSelect(selection, category);

          case 'MULTI_SELECT':
            return this.handleMultiSelect(selection, category);

          case 'TEXT':
            return this.handleText(selection);

          case 'ARRANGE':
            return this.handleArrange(selection, category);

          default:
            return null;
        }
      })
      .filter(filter => filter !== null); // Filter out null entries

    const requestData = {
      query: '',
      filters: filters,
      facet: null,
      paging: {
        page: page,
        size: size
      }
    };

    this.sortingService.sortedCatalogCards(requestData)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          if (res) {
            this.catalogDataService.updateCatalogData(res);
            this.catalogDataService.setDataSourceType('SORTING'); // Notify data source type
          }
        },
        error: (err) => {
          console.error('Error fetching sorted catalog:', err);
        }
      });

  }

  public clearSortingForm() {
    this.form.reset();
    this.catalogDataService.resetData();
  }


  public pricingSubmit() {
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


  private handleSelect(selection: any, category: any) {
    const selectedOption = category.values.find((val: { value: any; }) => val.value === selection.value);
    return selectedOption ? { filterId: selection.filterId, value: selectedOption.id } : null;
  }

  private handleMultiSelect(selection: any, category: any) {
    const multiSelectedOptions = selection.value?.split(',').map((val: string) => {
      const option = category.values.find((opt: { value: string; }) => opt.value === val.trim());
      return option ? option.id : null;
    }).filter((id: null) => id !== null);

    return multiSelectedOptions?.length ? { filterId: selection.filterId, multiValues: multiSelectedOptions } : null;
  }

  private handleText(selection: any) {
    return { filterId: selection.filterId, value: selection.value };
  }

  private handleArrange(selection: any, category: any) {
    const arrangeData: any = { filterId: selection.filterId };

    // Add `from` and `to` if present
    if (selection.from) arrangeData.from = +selection.from;
    if (selection.to) arrangeData.to = +selection.to;

    // Only add pairFilter if a value is selected
    if (selection.pairFilter && selection.value) {
      const pairFilter = category.pairFilter;
      //@ts-ignore
      const selectedPairOption = pairFilter?.values.find(val => val.id === selection.value);

      if (selectedPairOption) {
        arrangeData.pairFilter = {
          filterId: this.pairFilterID,
          value: selectedPairOption.id.toString() // Ensure value is a string
        };
      }
    }

    // Only return the arrangeData if there is a valid 'from' or 'to' or 'pairFilter'
    if (arrangeData.from || arrangeData.to || arrangeData.pairFilter) {
      return arrangeData;
    }

    return null; // Return null if no valid data
  }


}
