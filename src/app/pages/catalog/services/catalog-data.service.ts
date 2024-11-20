import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { CarCatalogRes } from "../../../core/constants/carCatalogRes";

@Injectable({
  providedIn: "root",
})
export class CatalogDataService {
  private _catalogData$ = new BehaviorSubject<CarCatalogRes | null>(null);
  catalogData$ = this._catalogData$.asObservable();

  private _currentPaging$ = new BehaviorSubject<{ page: number; size: number }>({ page: 0, size: 10 });
  currentPaging$ = this._currentPaging$.asObservable();

  private dataSourceTypeSource$ = new BehaviorSubject<'DEFAULT' | 'SORTING'>('DEFAULT');
  dataSourceType$ = this.dataSourceTypeSource$.asObservable();


  private _triggerSortingRequest$ = new Subject<{ page: number; size: number }>();
  triggerSortingRequest$ = this._triggerSortingRequest$.asObservable();

  updateCatalogData(data: CarCatalogRes) {
    this._catalogData$.next(data);
  }

  updatePaging(paging: { page: number; size: number }) {
    this._currentPaging$.next(paging);
    if (this.dataSourceTypeSource$.value === 'SORTING') {
      this._triggerSortingRequest$.next(paging);
    }
  }

  setDataSourceType(type: 'DEFAULT' | 'SORTING') {
    this.dataSourceTypeSource$.next(type);
  }

  resetData() {
    this._catalogData$.next(null);
    this._currentPaging$.next({ page: 0, size: 10 });
    this.dataSourceTypeSource$.next('DEFAULT');
  }
}
