import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {SessionService} from "../../../core/services/root/sessionService";
import {SocialModel} from "../models/social.model";
import {catchError, map, Observable} from "rxjs";
import {BackendResponseModel} from "../../../core/models/backend-response.model";

@Injectable({
  providedIn: "root"
})
export class SocialService {

  private API_URL = `${environment.API_BASE}/api/v1/`;

  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getSocials(paging: { page: number, size: number }): Observable<SocialModel | null> {
    return this.http.post<BackendResponseModel<SocialModel>>(`${this.API_URL}social-media/list`, {paging})
      .pipe(
        map(this.sessionService.handleResponse<SocialModel>),
        catchError(this.sessionService.handleError)
      )
  }
}
