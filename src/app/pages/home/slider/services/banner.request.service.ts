import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, catchError, map, Observable, of } from "rxjs";

import { environment } from "../../../../../environments/environment";
import { Banner, BannerRes } from "../../../../core/constants/bannerRes";
import { SessionService } from "../../../../core/services/root/sessionService";
import { BackendResponseModel } from "../../../../core/models/backend-response.model";


@Injectable({
  providedIn: 'root'
})
export class BannerRequestService {

  private API_URL = `${environment.API_BASE}/api/v1`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService)
  private _bannerList$ = new BehaviorSubject<Banner[]>([])
  public bannerList$ = this._bannerList$.asObservable();


  public getBanner(page: number, size: number): Observable<BannerRes | null> {
    const requestBody = {
      page: page,
      size: size
    };
    return this.http.post<BackendResponseModel<BannerRes>>(`${this.API_URL}/carousel/list`, requestBody)
      .pipe(
        map(this.sessionService.handleResponse<BannerRes>),
        catchError(error => {
          this.sessionService.handleError(error)
          return of(null as unknown as BannerRes)
        })
      );
  }

  setBannerList(bannerList: Banner[]): void {
    this._bannerList$.next(bannerList)
  }
}
