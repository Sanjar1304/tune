import { BreadcrumbComponent } from "../../core/components/breadcrumb/breadcrumb.component";
import { CatalogCardsComponent } from "./catalog-cards/catalog-cards.component";
import { CatalogSortingComponent } from "./catalog-sorting/catalog-sorting.component";
import { CommonModule } from "@angular/common";
import {Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import {SortingModelService} from "../home/sorting-models/services/sorting-model.service";
import {CarCatalogRes} from "../../core/constants";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {filter, map, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CatalogSortingComponent,
    CatalogCardsComponent,
    BreadcrumbComponent
  ],
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit{

  private route = inject(ActivatedRoute);
  private destroy$ = inject(DestroyRef);
  private sortingModelService = inject(SortingModelService);

  cars = signal<CarCatalogRes | null>(null);

  ngOnInit(){
    this.route.queryParams
    .pipe(
      filter((val) => !!Object.keys(val).length),
      map((val) => JSON.parse(val['filter'])),
      switchMap(({type, value}) => {
        return this.sortingModelService.getModelsName({query: '', filterStatic: {type, value}}, {page: 0, size: 10})
      }),
      tap((res) => {
        if(res) this.cars.set(res)
      }),
      takeUntilDestroyed(this.destroy$)
    ).subscribe()
  }
}
