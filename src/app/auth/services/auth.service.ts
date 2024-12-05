import { BehaviorSubject, Observable, catchError, map } from "rxjs";
import { Injectable, inject, signal } from "@angular/core";
import { UserCheckResponseModel, UserVerifyResponseModel } from "../models/auth.model";

import { BackendResponseModel } from "../../core/models/backend-response.model";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "../../core/services/root/sessionService";
import { UserDataDto } from "../../core/models/user.model";
import { environment } from "../../../environments/environment";
import { StorageService } from "../../shared/services/storage.service";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = `${environment.API_BASE}/auth/v1/`;
  private http = inject(HttpClient);
  private sessionService = inject(SessionService);
  private jwt = inject(JwtHelperService);
  private storageService = inject(StorageService)

  private userCheckResponse: string = '';
  private encryptKey: BackendResponseModel<UserVerifyResponseModel> | null = null;
  private otpSuccessRes: boolean | null = null;

  private _isAuthenticated = signal(!this.jwt.isTokenExpired(this.storageService.accessToken));

  private isRegCheckSource = new BehaviorSubject<boolean>(false);
  isRegCheck$ = this.isRegCheckSource.asObservable();

  private identity$ = new BehaviorSubject<string>('');
  hasIdentity$ = this.identity$.asObservable();


  get otpSuccess(): boolean | null{
    return this.otpSuccessRes
  }

  get isAuthenticated() {
    return this._isAuthenticated;
  }

  private setIsAuthenticated(value: boolean) {
    this._isAuthenticated.set(value);
  }

  public get identity() {
    return this.userCheckResponse;
  }

  public get hashedKey(): string | null {
    return this.encryptKey?.result.data.encryptKey || null
  }

  public setIsRegCheck(isReg: boolean) {
    return this.isRegCheckSource.next(isReg);
  }

  public setIdentity(identity: string){
    this.identity$.next(identity);
  }

  public logout() {
    this.setIsAuthenticated(false)
  }

  public userCheck(username: string, userType: string): Observable<UserCheckResponseModel | null> {
    return this.http.post<BackendResponseModel<UserCheckResponseModel>>(
      `${this.API_URL}external/sign/user/check`,
      { username, userType }).pipe(
        map(response => {
          this.userCheckResponse = response.result.data.identity;
          this.sessionService.handleResponse<UserCheckResponseModel>(response);
          return response.result.data
        }),
        catchError(this.sessionService.handleError)
      );
  }


  public sendOtpCode(identity: string | null, code: string): Observable<UserVerifyResponseModel | null> {
    return this.http.post<BackendResponseModel<UserVerifyResponseModel>>(`${this.API_URL}external/sign/user/verify`, { identity, code }).pipe(
      map(res => {
        this.encryptKey = res;
        this.otpSuccessRes = res.success;
        this.sessionService.handleResponse<UserVerifyResponseModel>(res);
        return res.result.data
      }),
      catchError(this.sessionService.handleError)
    )
  }


  public resendOtp(identity: string){
    return this.http.post(`${this.API_URL}external/sign/code/resend`, { identity })
  }


  public sendEncryptedLoginPassword(identity: string, password: string): Observable<UserDataDto | null> {
    return this.http.post<BackendResponseModel<UserDataDto>>(`${this.API_URL}external/sign/up-in`, { identity, password }).pipe(
      map(res => {
        if (res.success) {
          this.setIsAuthenticated(true)
        } else {
          this.setIsAuthenticated(false)
        }
        this.sessionService.handleResponse(res);
        return res.result.data
      }),
      catchError(this.sessionService.handleError)
    )
  }



  public sendResetCheck(username: string): Observable<UserCheckResponseModel | null>{
    return this.http.post<BackendResponseModel<UserCheckResponseModel>>(
      `${this.API_URL}password/reset/check`, {username}).pipe(
      map(response => {
        this.userCheckResponse = response.result.data.identity;
        this.sessionService.handleResponse<UserCheckResponseModel>(response);
        return response.result.data
      }),
      catchError(this.sessionService.handleError)
    );
  }


  public sendResetOtp(identity: string | null, code: string): Observable<UserVerifyResponseModel | null>{
    return this.http.post<BackendResponseModel<UserVerifyResponseModel>>(`${this.API_URL}password/reset/verify`, { identity, code }).pipe(
      map(res => {
        this.encryptKey = res;
        this.otpSuccessRes = res.success;
        this.sessionService.handleResponse<UserVerifyResponseModel>(res);
        return res.result.data
      }),
      catchError(this.sessionService.handleError)
    )
  }


  public sendEncryptedResetPassword(identity: string, password: string): Observable<UserDataDto | null> {
    return this.http.post<BackendResponseModel<UserDataDto>>(`${this.API_URL}password/reset/confirm`, { identity, password }).pipe(
      map(res => {
        if (res.success) {
          this.setIsAuthenticated(true)
        } else {
          this.setIsAuthenticated(false)
        }
        this.sessionService.handleResponse(res);
        return res.result.data
      }),
      catchError(this.sessionService.handleError)
    )
  }

  public resetResendOtp(identity: string){
    return this.http.post(`${this.API_URL}password/reset/code/resend`, { identity })
  }
}
