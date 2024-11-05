import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";

import { BackendResponseModel } from "../../../../core/models/backend-response.model";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "../../../../core/services/root/sessionService";
import { SortingFormModel } from "../models/sorting-form.model";
import { environment } from "../../../../../environments/environment";

@Injectable
({
  providedIn: 'root'
})
export class SortingService {

  private API_URL = `${environment.API_BASE}/api/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getSortingForm(): Observable<SortingFormModel | null>{
    return this.http.get<BackendResponseModel<SortingFormModel>>(`${this.API_URL}filter/list?categoryId=1`)
    .pipe(
      map((response) => {
        this.sessionService.handleResponse(response);
        return response.result.data
      } ),
      catchError(this.sessionService.handleError)
    )
  }

}
