import { Injectable, inject } from "@angular/core";
import { Observable, catchError, map } from "rxjs";

import { BackendResponseModel } from "../../../core/models/backend-response.model";
import { HttpClient } from "@angular/common/http";
import { ICarModelList } from "../models/cars.model";
import { SessionService } from "../../../core/services/root/sessionService";
import { environment } from "../../../../environments/environment";

@Injectable({
providedIn: 'root'
})
export class AddsService {

  private API_URL = `${environment.API_BASE}/api/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getCarInfos(paging: { page: number, size: number}):  Observable<ICarModelList | null>{

    const pagging = {
      page: paging.page,
      size: paging.size
    }


    return this.http.post<BackendResponseModel<ICarModelList>>(`${this.API_URL}asset/paging`, JSON.stringify({pagging}))
     .pipe(
        map(res => {
          console.log(res);
          return this.sessionService.handleResponse<ICarModelList>(res);
        }),
        catchError(this.sessionService.handleError)
     )
  }

  public getCarInfoById(id:string){
    return this.http.get(`${this.API_URL}asset/by-id?id=${id}`)
  }
}
