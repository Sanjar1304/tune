import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";

import { BackendResponseModel } from "../../../../core/models/backend-response.model";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "../../../../core/services/root/sessionService";
import { SortingFormModel } from "../models/sorting-form.model";
import { environment } from "../../../../../environments/environment";
import { CarCatalogRes } from "../../../../core/constants/carCatalogRes";
import { SortingModel } from "../../../home/sorting-models/models/sorting.model";

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
  public getModels(): Observable<SortingModel | null> {
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

  // Fetch buttons based on query and filter type
  public getButtonsName(
    data: { query: string; filterStatic?: { type: string; value: string } },
    paging: { page: number; size: number }
  ): Observable<CarCatalogRes | null> {
    const requestBody = {
      query: data.query,
      facet: "MARK",
      filters: [] as Filter[], // Use Filter type
      filtersStatic: data.filterStatic
        ? [data.filterStatic]
        : [{ type: "USING_STATE", value: "-1" }],
      paging: {
        page: paging.page,
        size: paging.size
      }
    };
    return this.http
      .post<BackendResponseModel<CarCatalogRes>>(
        `${this.API_URL}product/search/basic`,
        JSON.stringify(requestBody)
      )
      .pipe(
        map(this.sessionService.handleResponse<CarCatalogRes>),
        catchError(this.sessionService.handleError)
      );
  }

  // Fetch sorting form configuration
  public getSortingForm(): Observable<SortingFormModel | null> {
    return this.http
      .get<BackendResponseModel<SortingFormModel>>(
        `${this.API_URL}filter/list?categoryId=1`
      )
      .pipe(
        map(this.sessionService.handleResponse<SortingFormModel>),
        catchError(this.sessionService.handleError)
      );
  }

  // Fetch sorted catalog cards based on filter and query data
  public sortedCatalogCards(data: {
    query: string;
    paging: { size: number; page: number };
    filters: Filter[];
    facet: null
  }): Observable<CarCatalogRes | null> {
    return this.http
      .post<BackendResponseModel<CarCatalogRes>>(
        `${this.API_URL}product/search/basic`,
        data
      )
      .pipe(
        map(this.sessionService.handleResponse<CarCatalogRes>),
        catchError(this.sessionService.handleError)
      );
  }
}
