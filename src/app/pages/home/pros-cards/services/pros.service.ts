import {inject, Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {ProsModel} from "../models/pros.model";
import {BackendResponseModel} from "../../../../core/models/backend-response.model";

@Injectable({
  providedIn: "root"
})
export class ProsService {
  private API_URL = `${environment.API_BASE}/api/v1/`;

  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getProsCards(): Observable<ProsModel | null>{
    return this.http.post<BackendResponseModel<ProsModel>>(`${this.API_URL}product/loan/list`, {})
      .pipe(
        map(this.sessionService.handleResponse<ProsModel>),
        catchError(this.sessionService.handleError)
      )
  }
}
