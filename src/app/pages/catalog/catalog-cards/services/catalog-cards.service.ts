import {inject, Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable} from "rxjs";
import {CarCatalogRes} from "../../../../core/constants/carCatalogRes";
import {ICarDetailRes} from "../../../../core/constants/ICarDetailRes";
import {BackendResponseModel} from "../../../../core/models/backend-response.model";
import {SessionService} from "../../../../core/services/root/sessionService";

@Injectable({
  providedIn: "root"
})
export class CatalogCardsService {

  private API_URL = `${environment.API_BASE}/api/v1`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);


  public getCatalogCards(data:{query:string}, paging: { page: number, size: number }): Observable <CarCatalogRes | null>{

    const requestBody = {
      query: data.query,
      facet: null,  // You can adjust this based on actual data
      filters: [],  // Assuming an empty filters array for now
      paging: {
        page: paging.page,
        size: paging.size
      }
    };

    return this.http.post<BackendResponseModel<CarCatalogRes>>(`${this.API_URL}/product/search/basic`, JSON.stringify(requestBody)).pipe(
      map(this.sessionService.handleResponse<CarCatalogRes>),
      catchError(this.sessionService.handleError)
    )

  }


  public getCarById(id:any): Observable<ICarDetailRes | null>{
    return this.http.get<BackendResponseModel<ICarDetailRes>>(`${this.API_URL}/product/by-id?id=${id}`)
      .pipe(
        map(this.sessionService.handleResponse<ICarDetailRes>),
        catchError(this.sessionService.handleError)
      );
  }
}
