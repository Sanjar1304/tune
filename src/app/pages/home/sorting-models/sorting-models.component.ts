import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject} from '@angular/core';

import { CarCatalogRes } from '../../../core/constants/carCatalogRes';
import { SortingModel } from './models/sorting.model';
import {SortingModelService} from "./sorting-model.service";
import {TranslocoPipe} from "@jsverse/transloco";
import { subscribe } from 'diagnostics_channel';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-sorting-models',
  standalone: true,
  imports: [TranslocoPipe, NgForOf, NgIf, DecimalPipe],
  templateUrl: './sorting-models.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingModelsComponent implements OnInit{

  public carModels!:SortingModel[];
  public carModelsImage!: { imageLink: string, type: string, value: string }[];
  public carModelsInfo!: CarCatalogRes;
  public selectedModelsInfo!: CarCatalogRes;
  public carModelMenu!: SortingModel[];

  public isSelectedPressed: boolean = false;

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private sortingService = inject(SortingModelService);

  public ngOnInit() {
    this.getModelsSubscription();
    this.getCarModelNamesSubscription();
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
          this.isSelectedPressed = false;
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      });
  }

  public getCarModelNamesSubscription(isInitialLoad: boolean = false) {
    // Ensure the correct type here
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
    // Ensure the correct format here
    this.sortingService.getModelsName({ query: '', filterStatic: { type, value } }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(res => {
        this.selectedModelsInfo = res as CarCatalogRes;
        console.log(this.selectedModelsInfo.facets.length)
        this.isSelectedPressed = true;
        this.cdr.detectChanges();
      });
  }

  public remainSelectedModel(type: string, value: string) {
    this.fetchModelNames(type, value);
  }

  public getImageValue(type: string, value: string) {
    this.fetchModelNames(type, value);
  }
}
