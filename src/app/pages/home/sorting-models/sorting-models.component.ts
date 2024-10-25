import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject} from '@angular/core';

import { CarCatalogRes } from '../../../core/constants/carCatalogRes';
import { SortingModel } from './models/sorting.model';
import {SortingModelService} from "./sorting-model.service";
import {TranslocoPipe} from "@jsverse/transloco";
import { subscribe } from 'diagnostics_channel';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-sorting-models',
  standalone: true,
  imports: [TranslocoPipe, NgForOf],
  templateUrl: './sorting-models.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingModelsComponent implements OnInit{

  public carModels!:SortingModel[]
  public carModelsInfo!: CarCatalogRes

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private sortingService = inject(SortingModelService);

  public ngOnInit() {
    this.getModelsSubscription();
    this.getCarModelNamesSubscription();
  }

  public getModelsSubscription(){
    this.sortingService.getModels()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carModels = res as unknown as SortingModel[];
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
    });
  }

  public getCarModelNamesSubscription(){
    this.sortingService.getModelsName({query: ''}, {page: 0, size: 10})
    .pipe(takeUntilDestroyed(this.destroy$))
    .subscribe({
      next: res => {
        this.carModelsInfo = res as CarCatalogRes;
        console.log(this.carModelsInfo)
        this.cdr.detectChanges();
      },
      error: err => console.log(err)
    })
  }


  public get CarModelsPhotos(){
    return this.carModels?.map(val => val?.imageLink)
  }
}
