import {inject, Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {GettingCreditModel} from "../models/getting-credit.model";
import {BackendResponseModel} from "../../../../core/models/backend-response.model";

@Injectable({
  providedIn: "root"
})
export class GettingCreditService {

  private API_URL = `${environment.API_BASE}/api/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getCreditInfos(): Observable<GettingCreditModel | null>{
    return this.http.get<BackendResponseModel<GettingCreditModel>>(`${this.API_URL}product/loan/info/g`)
    .pipe(
      map(this.sessionService.handleResponse<GettingCreditModel>),
      catchError(this.sessionService.handleError)
    )
  }
}
