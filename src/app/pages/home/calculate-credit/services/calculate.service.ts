import {inject, Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {CalculateModel, CalculateRequestModel} from "../models/calculate.model";
import {BackendResponseModel} from "../../../../core/models/backend-response.model";


@Injectable({
  providedIn: "root"
})
export class CalculateService {
  private API_URL = `${environment.API_BASE}/api/v1/`;

  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public calculateData(data: {
    amount: {amount: number, scale: number, currency: string },
    term: number,
    interest: number,
    initialAmount: {amount: number, scale: number, currency: string },
    calcType: string;
  }): Observable<CalculateModel | null>{

    const reqBody = {
      amount: {
        amount: data.amount,
        scale: 0,
        currency: 'sum'
      },
      term: data.term,
      interest: 15,
      initialAmount: {
        amount: data.initialAmount,
        scale: 0,
        currency: 'sum'
      },
      calcType: 'DIFFERENTIATED'
    };

    return this.http.post<BackendResponseModel<CalculateModel>>(`${this.API_URL}calculator/loan`, reqBody)
      .pipe(
        map(this.sessionService.handleResponse<CalculateModel>),
        catchError(this.sessionService.handleError)
      )
  }
}
