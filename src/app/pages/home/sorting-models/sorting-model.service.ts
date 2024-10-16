import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {SessionService} from "../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {BackendResponseModel} from "../../../core/models/backend-response.model";
import { SortingModel } from "./models/sorting.model";

@Injectable({
  providedIn: 'root'
})
export class SortingModelService {

  private API_URL = `${environment.API_BASE}/api/v1`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getModels(): Observable<SortingModel | null>{
    return this.http.get<BackendResponseModel<SortingModel>>(`${this.API_URL}/filter/static/list?type=MARK`)
      .pipe(
        map(this.sessionService.handleResponse<SortingModel>),
        catchError(this.sessionService.handleError)
      )
  }
}
