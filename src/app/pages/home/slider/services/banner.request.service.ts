import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { BehaviorSubject, catchError, map, Observable, of, shareReplay } from "rxjs";

import { Banner, BannerRes } from "../../../../core/constants/bannerRes";
import { SessionService } from "../../../../core/services/root/sessionService";
import { BackendResponseModel } from "../../../../core/models/backend-response.model";
import { ENDPOINTS } from "../../../../core/constants";


@Injectable({
  providedIn: 'root'
})
export class BannerRequestService {
  private http = inject(HttpClient);
  private sessionService = inject(SessionService)

  private _bannerCache: Record<string, Banner[]> = {};
  private _bannerList$ = new BehaviorSubject<Banner[]>([]);
  public bannerList$ = this._bannerList$.asObservable();


  public setBannerList(banners: Banner[], language: string): void {
    this._bannerCache[language] = banners;
    this._bannerList$.next(banners);
  }

  public getCachedBannerList(language: string): Banner[] {
    return this._bannerCache[language] || [];
  }

  public clearCachedData(): void {
    this._bannerCache = {};
  }

  public clearBannerList(): void {
    this._bannerList$.next([]);
  }


  public getBanner(page: number, size: number): Observable<BannerRes | null> {
    const requestBody = {
      page: page,
      size: size
    };
    return this.http.post<BackendResponseModel<BannerRes>>(ENDPOINTS.CAROUSEL.LIST, requestBody)
      .pipe(
        map(this.sessionService.handleResponse<BannerRes>),
        catchError(error => {
          this.sessionService.handleError(error)
          return of(null as unknown as BannerRes)
        })
      );
  }

}
