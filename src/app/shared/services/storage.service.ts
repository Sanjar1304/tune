import { DOCUMENT } from '@angular/common';
import { inject, Inject, Injectable } from '@angular/core';
import { Constants, STORAGE_KEY } from '../../core/constants';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storage
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.storage = this.document.defaultView?.localStorage;
  }


  get language(): typeof Constants.DEFAULT_LANGUAGE {
    return (
      (this.storage?.getItem(
        STORAGE_KEY.language,
      ) as typeof Constants.DEFAULT_LANGUAGE) ?? 'uz'
    );
  }

  set language(activeLang: typeof Constants.DEFAULT_LANGUAGE) {
    this.storage?.setItem(STORAGE_KEY.language, activeLang);
  }

  get accessToken(): string {
    return this.storage?.getItem(STORAGE_KEY.accessToken) || '';
  }

  set accessToken(accessToken: string) {
    this.storage?.setItem(STORAGE_KEY.accessToken, accessToken);
  }

  get refreshToken(): string {
    return this.storage?.getItem(STORAGE_KEY.refreshToken) || '';
  }

  set refreshToken(refreshToken: string) {
    this.storage?.setItem(STORAGE_KEY.refreshToken, refreshToken);
  }

  get refreshTokenExpireTime(): string {
    return this.storage?.getItem(STORAGE_KEY.refreshTokenExpire) || '';
  }
  set refreshTokenExpireTime(time: string) {
    this.storage?.setItem(STORAGE_KEY.refreshTokenExpire, time);
  }

  removeAccessToken(): void {
    this.storage?.removeItem(STORAGE_KEY.accessToken);
  }

  removeRefreshToken(): void {
    this.storage?.removeItem(STORAGE_KEY.refreshToken);
  }
  removeRefreshTokenExpireTime(): void {
    this.storage?.removeItem(STORAGE_KEY.refreshTokenExpire);
  }
}
