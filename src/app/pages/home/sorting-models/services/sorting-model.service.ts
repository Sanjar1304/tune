import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {SessionService} from "../../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {BackendResponseModel} from "../../../../core/models/backend-response.model";
import { SortingModel } from "../models/sorting.model";
import { CarCatalogRes } from "../../../../core/constants/carCatalogRes";

@Injectable({
  providedIn: 'root'
})
export class SortingModelService {

  private API_URL = `${environment.API_BASE}/api/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getModels(): Observable<SortingModel | null>{
    return this.http.post<BackendResponseModel<SortingModel>>(`${this.API_URL}filter/static/list`,  { types: ["USING_STATE", "MARK"] })
      .pipe(
        map(this.sessionService.handleResponse<SortingModel>),
        catchError(this.sessionService.handleError)
      )
  }


  public getModelsName(data:{query:string, filterStatic?: {type: string, value: string}}, paging: { page: number, size: number }): Observable <CarCatalogRes | null>{
    const requestBody = {
      query: data.query,
      facet: 'MARK',
      filters: [],
      filtersStatic: data.filterStatic ? [data.filterStatic] : [{ type: "USING_STATE", value: "-1" }],
      paging: {
        page: paging.page,
        size: paging.size
      }
    };
    return this.http.post<BackendResponseModel<CarCatalogRes>>(`${this.API_URL}product/search/basic`, JSON.stringify(requestBody)).pipe(
      map(this.sessionService.handleResponse<CarCatalogRes>),
      catchError(this.sessionService.handleError)
    )

  }
}
