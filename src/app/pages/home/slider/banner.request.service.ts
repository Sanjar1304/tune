import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {catchError, map, Observable} from "rxjs";

import {environment} from "../../../../environments/environment";
import {BannerRes} from "../../../core/constants/bannerRes";
import {SessionService} from "../../../core/services/root/sessionService";
import {BackendResponseModel} from "../../../core/models/backend-response.model";

@Injectable({
  providedIn: 'root'
})
export class BannerRequestService {

  private API_URL = `${environment.API_BASE}/api/v1`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService)

  public getBanner(page: number, size: number): Observable<BannerRes | null> {
    const requestBody = {
      page: page,
      size: size
    };
    return this.http.post<BackendResponseModel<BannerRes>>(`${this.API_URL}/carousel/list`, requestBody)
      .pipe(
        map(this.sessionService.handleResponse<BannerRes>),
        catchError(this.sessionService.handleError)
      );
  }

  public navigateToOne(id: string){
    return this.http.post(`${environment.API_BASE}/web/v1/carousel/one`, {id})
  }

  public navigateToList(data: {page:number, size: number}){
    const body = {
      page: data.page,
      size: data.size
    }
    return this.http.post(`${environment.API_BASE}/web/v1/carousel/list`, JSON.stringify(body))
  }

}
