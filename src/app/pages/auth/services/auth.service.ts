import { BehaviorSubject, Observable, catchError, map } from "rxjs";
import { Injectable, inject } from "@angular/core";
import { UserCheckResponseModel, UserVerifyResponseModel } from "../models/auth.model";

import { BackendResponseModel } from "../../../core/models/backend-response.model";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "../../../core/services/root/sessionService";
import { UserDataDto } from "../../../core/models/user.model";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userCheckResponse: BackendResponseModel<UserCheckResponseModel> | null = null;
  private encryptKey: BackendResponseModel<UserVerifyResponseModel> | null = null;

  private isRegCheckSource = new BehaviorSubject<boolean>(false);
  isRegCheck$ = this.isRegCheckSource.asObservable();


  private API_URL = `${environment.API_BASE}/auth/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public get identity(): string | null {
    return this.userCheckResponse?.result.data.identity || null;
  }

  public get hashedKey(): string | null {
    return this.encryptKey?.result.data.encryptKey || null;
  }

  public setIsRegCheck(isReg: boolean) {
    return this.isRegCheckSource.next(isReg);
  }

  public getUserCheckResponse(): BackendResponseModel<UserCheckResponseModel> | null {
    return this.userCheckResponse;
  }

  public userCheck(username: string, userType: string): Observable<UserCheckResponseModel | null> {
    return this.http.post<BackendResponseModel<UserCheckResponseModel>>(
      `${this.API_URL}external/sign/user/check`,
      { username, userType }).pipe(
      map(response => {
        this.userCheckResponse = response;
        this.sessionService.handleResponse<UserCheckResponseModel>(response);
        return response.result.data
      }),
      catchError(this.sessionService.handleError)
    );
  }


  public sendOtpCode(identity: string, code:string): Observable<UserVerifyResponseModel | null>{

    return this.http.post<BackendResponseModel<UserVerifyResponseModel>>(`${this.API_URL}external/sign/user/verify`, {identity, code}).pipe(
      map(res => {
        this.encryptKey = res;
        this.sessionService.handleResponse<UserVerifyResponseModel>(res);
        return res.result.data
      }),
      catchError(this.sessionService.handleError)
    )
  }

  public sendEncryptedLoginPassword(identity: string, password:string): Observable<UserDataDto | null> {
    return this.http.post<BackendResponseModel<UserDataDto>>(`${this.API_URL}external/sign/up-in`, {identity, password}).pipe(
      map(res => {
        this.sessionService.handleResponse(res);
        return res.result.data
      }),
      catchError(this.sessionService.handleError)
    )
  }
}
