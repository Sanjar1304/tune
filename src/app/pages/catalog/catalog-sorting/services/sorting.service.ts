import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";

import { BackendResponseModel } from "../../../../core/models/backend-response.model";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "../../../../core/services/root/sessionService";
import { SortingFormModel } from "../models/sorting-form.model";
import { environment } from "../../../../../environments/environment";
import { CarCatalogRes } from "../../../../core/constants/carCatalogRes";
import { SortingModel } from "../../../home/sorting-models/models/sorting.model";
import { ENDPOINTS } from "../../../../core/constants";

// Define Filter type to handle all filter structures in the codebase
type Filter =
  | { filterId: number; value: string }  // Simple value filter
  | { filterId: number; multiValues: (string | null)[] }  // Multi-select value filter
  | { filterId: number; from: number; to: number }  // Range filter with from and to
  | { filterId: number; from: number }  // Range filter with only from
  | { filterId: number; to: number };

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  private API_URL = `${environment.API_BASE}/api/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  // Fetch sorting models for car catalog
  public getFormTopButtons(): Observable<SortingModel | null> {
    return this.http
      .post<BackendResponseModel<SortingModel>>(
        `${this.API_URL}filter/static/list`,
        { types: ["USING_STATE", "MARK"] }
      )
      .pipe(
        map(this.sessionService.handleResponse<SortingModel>),
        catchError(this.sessionService.handleError)
      );
  }


  // Fetch sorting form configuration
  public getFormFields(): Observable<SortingFormModel | null> {
    return this.http
      .get<BackendResponseModel<SortingFormModel>>(
        `${this.API_URL}filter/list?categoryId=1`
      )
      .pipe(
        map(this.sessionService.handleResponse<SortingFormModel>),
        catchError(this.sessionService.handleError)
      );
  }


  public requestSearchBasic(data: {
    query: string;
    paging: { size: number; page: number };
    filters: Filter[];
    facet: null
  }): Observable<CarCatalogRes | null> {
    return this.http
      .post<BackendResponseModel<CarCatalogRes>>(
        ENDPOINTS.PRODUCT.SEARCH_BASIC,
        data
      )
      .pipe(
        map(this.sessionService.handleResponse<CarCatalogRes>),
        catchError(this.sessionService.handleError)
      );
  }
}
