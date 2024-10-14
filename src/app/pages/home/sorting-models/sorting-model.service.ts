import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {SessionService} from "../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {CarCatalogRes} from "../../../core/constants/carCatalogRes";
import {BackendResponseModel} from "../../../core/models/backend-response.model";

@Injectable({
  providedIn: 'root'
})
export class SortingModelService {

  private API_URL = `${environment.API_BASE}/api/v1`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getModels(data: object): Observable<CarCatalogRes | null>{
    return this.http.post<BackendResponseModel<CarCatalogRes>>(`${this.API_URL}/product/search/basic`, JSON.stringify(data))
      .pipe(
        map(this.sessionService.handleResponse<CarCatalogRes>),
        catchError(this.sessionService.handleError)
      )
  }
}
