import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';

import {TranslocoPipe} from "@jsverse/transloco";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

import {CarCatalogRes} from "../../../core/constants/carCatalogRes";
import {CatalogCardsService} from "../../catalog/catalog-cards/services/catalog-cards.service";
import {SortingModelService} from "./sorting-model.service";


@Component({
  selector: 'app-sorting-models',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './sorting-models.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingModelsComponent implements OnInit{

  public carModels!: CarCatalogRes;

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private sortingModels = inject(SortingModelService);

  public ngOnInit() {
    this.getModelsSubscription();
  }

  public getModelsSubscription(){
    this.sortingModels.getModels({facet:'MODEL'})
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
      next: res => {
        this.carModels = res as CarCatalogRes;
        this.cdr.detectChanges();
      },
      error: err => console.log(err)
    });
  }
}
