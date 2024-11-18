import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CarCatalogRes } from "../../../core/constants/carCatalogRes";

@Injectable({
  providedIn: "root",
})
export class CatalogDataService {
  private catalogDataSource = new BehaviorSubject<CarCatalogRes | null>(null);
  catalogData$ = this.catalogDataSource.asObservable();

  private currentPagingSource = new BehaviorSubject<{ page: number; size: number }>({ page: 0, size: 10 });
  currentPaging$ = this.currentPagingSource.asObservable();

  private dataSourceTypeSource = new BehaviorSubject<'DEFAULT' | 'SORTING'>('DEFAULT');
  dataSourceType$ = this.dataSourceTypeSource.asObservable();

  // A subject to trigger a new sorting request when the page changes
  private triggerSortingRequestSource = new Subject<{ page: number; size: number }>();
  triggerSortingRequest$ = this.triggerSortingRequestSource.asObservable();

  updateCatalogData(data: CarCatalogRes) {
    this.catalogDataSource.next(data);
  }

  updatePaging(paging: { page: number; size: number }) {
    this.currentPagingSource.next(paging);

    // If data source is 'SORTING', trigger a new sorting request with the updated page
    if (this.dataSourceTypeSource.value === 'SORTING') {
      this.triggerSortingRequestSource.next(paging);
    }
  }

  setDataSourceType(type: 'DEFAULT' | 'SORTING') {
    this.dataSourceTypeSource.next(type);
  }

  resetData() {
    this.catalogDataSource.next(null);
    this.currentPagingSource.next({ page: 0, size: 10 });
    this.dataSourceTypeSource.next('DEFAULT');
  }
}
