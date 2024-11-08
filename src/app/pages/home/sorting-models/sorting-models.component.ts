import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject} from '@angular/core';

import { CarCatalogRes } from '../../../core/constants/carCatalogRes';
import { SortingModel } from './models/sorting.model';
import {SortingModelService} from "./services/sorting-model.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {DecimalPipe, NgClass, NgForOf, NgIf, NgOptimizedImage, TitleCasePipe} from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";
import {LanguageService} from "../../../core/services/utils/language.service";


@Component({
  selector: 'app-sorting-models',
  standalone: true,
  imports: [NgForOf, NgIf, DecimalPipe, NgOptimizedImage, NgClass, TitleCasePipe, TranslocoPipe],
  templateUrl: './sorting-models.component.html',
  styles: `
    :host {
      .btn_animation {
        transition: .7s ease-in-out
      }

      .brand_icons {
        transition: .7s ease-in-out;
      }

      .brand_icons:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingModelsComponent implements OnInit{

  public carModels!:SortingModel[];
  public carModelsImage!: { imageLink: string, type: string, value: string }[];
  public carModelsInfo!: CarCatalogRes;
  public selectedModelsInfo!: CarCatalogRes;
  public carModelMenu!: SortingModel[];
  public selectedModelsLength = 0;

  public isSelectedPressed: boolean = false;
  public activeModel!: SortingModel;

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private sortingService = inject(SortingModelService);
  private languageService = inject(LanguageService);

  public ngOnInit() {

    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => {
        this.getModelsSubscription();
        this.getCarModelNamesSubscription();
      })
  }

  public getModelsSubscription() {
    this.sortingService.getModels()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carModels = res as unknown as SortingModel[];
          this.carModelsImage = this.carModels.filter(val => val.type === 'MARK').map(val => ({
            imageLink: val.imageLink,
            type: val.type,
            value: val.value
          }));
          this.carModelMenu = this.carModels.filter(val => val.type === 'USING_STATE');
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

  public getCarModelNamesSubscription(isInitialLoad: boolean = false) {
    const filterStatic = isInitialLoad ? { type: "USING_STATE", value: "-1" } : undefined;
    this.sortingService.getModelsName({ query: '', filterStatic }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          if (isInitialLoad) {
            this.carModelsInfo = res as CarCatalogRes;
          } else {
            this.selectedModelsInfo = res as CarCatalogRes;
            this.isSelectedPressed = true;
          }
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      });
  }

  private fetchModelNames(type: string, value: string) {
    this.sortingService.getModelsName({ query: '', filterStatic: { type, value } }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(res => {
        this.selectedModelsInfo = res as CarCatalogRes;
        this.selectedModelsLength = this.selectedModelsInfo.items.length;
        this.isSelectedPressed = true;
        this.cdr.detectChanges();
      });
  }

  public remainSelectedModel(menu: SortingModel) {
    this.activeModel = menu;
    this.fetchModelNames(menu.type, menu.value);
  }

  public getImageValue(type: string, value: string) {
    this.fetchModelNames(type, value);
  }

  public selectedActiveButton(type: string, value: string) {
    const selectedModel = this.carModelMenu.find(model => model.type === type && model.value === value);
    if (selectedModel) {
      this.activeModel = selectedModel;
      this.cdr.markForCheck();
    }
    this.fetchModelNames(type, value);
  }
}
