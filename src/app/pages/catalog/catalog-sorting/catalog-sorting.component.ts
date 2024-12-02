import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
  model, ViewChild, signal, computed,
} from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatLabel, MatOption, MatSelect } from "@angular/material/select";
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';

import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormField } from "@angular/material/form-field";
import { MatRadioModule } from "@angular/material/radio";
import { SortingFormModel, SortingFormSelection } from './models/sorting-form.model';
import { SortingService } from './services/sorting.service';
import { UiSvgIconComponent } from '../../../core/components/ui-svg-icon/ui-svg-icon.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatInput } from "@angular/material/input";
import { LanguageService } from "../../../core/services/utils/language.service";
import { TranslocoPipe } from "@jsverse/transloco";
import { CatalogDataService } from "../services/catalog-data.service";
import { SortingModel } from "../../home/sorting-models/models/sorting.model";
import {MatDivider} from "@angular/material/divider";


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
    NgClass,
    MatDivider
  ],
  templateUrl: './catalog-sorting.component.html',
  styleUrl: "./catalog-sorting.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogSortingComponent implements OnInit {

  private fb = inject(FormBuilder);
  private destroy$ = inject(DestroyRef);
  private sortingService = inject(SortingService);
  private languageService = inject(LanguageService);
  private catalogDataService = inject(CatalogDataService);

  @ViewChild('sortingForm') form!: NgForm;

  carModels = signal<SortingModel[]>([]);
  sortingCategories = signal<SortingFormModel[]>([]);
  sortingFormSelections = signal<SortingFormSelection[]>([]);
  carModelMenu = computed(() => this.carModels().filter((model) => model.type === 'USING_STATE'));
  activeModel = signal<SortingModel | null>(null);
  pricingFrom!: FormGroup;

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(() => {
      this.fetchFormFields();
      this.fetchTopButtons();
      this.validatePricingForm();
    })

    this.catalogDataService.triggerSortingRequest$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((paging) => {
        this.onSubmit(paging.page, paging.size);
      });
  }

  public validatePricingForm() {
    this.pricingFrom = this.fb.group({
      vinNomer: ['', [Validators.required, Validators.minLength(5)]],
      probeg: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10), Validators.pattern('^[0-9]*$')]]
    })
  }

  public fetchFormFields() {
    this.sortingService.getFormFields()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          const categories = res as unknown as SortingFormModel[];
          this.sortingCategories.set(categories);

          const selections = categories.map((category) => ({
            filterId: category.id,
            from: '',
            to: '',
            value: '',
            componentType: category.componentType,
            pairFilter: category.pairFilter
              ? {
                ...category.pairFilter,
                filterId: category.pairFilter.id, // Map `id` to `filterId`
              }
              : undefined,
          }));

          this.sortingFormSelections.set(selections as SortingFormSelection[]);
        },
        error: err => console.log(err)
      });
  }

  public fetchTopButtons() {
    this.sortingService.getFormTopButtons()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carModels.set(res as unknown as SortingModel[]);
          const firstModel = this.carModelMenu()[0];
          if (firstModel) this.activeModel.set(firstModel);
        },
        error: err => console.log(err)
      });
  }


  public onSubmit(page: number = 0, size: number = 10) {
    const requestData = {
      query: '',
      filters: this.returnFilter(this.sortingFormSelections()),
      facet: null,
      paging: {
        page: page,
        size: size
      }
    };

    this.sortingService.requestSearchBasic(requestData)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          if (res) {
            this.catalogDataService.updateCatalogData(res);
            this.catalogDataService.setDataSourceType('SORTING'); // Notify data source type
          }
        },
        error: (err) => console.error('Error fetching sorted catalog:', err)
      });
  }

  public clearSortingForm() {
    this.form.reset();
    this.catalogDataService.resetData();
  }


  public pricingSubmit() {
    console.log(this.pricingFrom.value)
  }

  public remainSelectedModel(menu: SortingModel) {
    this.activeModel.set(menu);
  }

  private returnFilter(selections: SortingFormSelection[]): any[] {
    return selections
      .filter((selection) => selection.value || selection.from || selection.to)
      .map((selection) => this.buildFilter(selection))
      .filter((filter) => filter !== null);
  }

  private buildFilter(selection: SortingFormSelection) {
    const category = this.sortingCategories().find((cat) => cat.id === selection.filterId);
    if (!category) return null;
    const filter = {
      filterId: selection.filterId,
      ...(selection.value ? this.getValueFilter(selection, category) : {}),
      ...(selection.from || selection.to ? this.getRangeFilter(selection) : {}),
    };

    return Object.keys(filter).length > 1 ? filter : null; // Ensure the filter has data.
  }

  private getValueFilter(selection: SortingFormSelection, category: SortingFormModel) {
    switch (category.componentType) {
      case 'SELECT':
        return this.getSelectFilter(selection, category);
      case 'MULTI_SELECT':
        return this.getMultiSelectFilter(selection, category);
      case 'TEXT':
        return { value: selection.value };
      default:
        return null;
    }
  }

  private getSelectFilter(selection: SortingFormSelection, category: SortingFormModel) {
    const selectedOption = category.values.find((val) => val.value === selection.value);
    return selectedOption ? { value: selectedOption.id } : null;
  }


  private getMultiSelectFilter(selection: SortingFormSelection, category: SortingFormModel) {
    const multiValues = selection.value
      .split(',')
      .map((val) => category.values.find((opt) => opt.value === val.trim())?.id)
      .filter((id) => id !== null);
    return multiValues.length ? { multiValues } : null;
  }

  private getRangeFilter(selection: SortingFormSelection) {
    const rangeFilter: any = {};
    if (selection.from) rangeFilter.from = +selection.from;
    if (selection.to) rangeFilter.to = +selection.to;
    if (selection.pairFilter && selection.value) {
      const selectedPair = selection.pairFilter.values.find((val) => val.id === +selection.value);
      if (selectedPair) {
        rangeFilter.pairFilter = { filterId: selection.pairFilter.filterId, value: selectedPair.id.toString() };
      }
    }
    return rangeFilter;
  }

}
