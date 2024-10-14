import {inject, Injectable} from "@angular/core";
import {CookieService} from "ngx-cookie-service";

export interface LocalStorageState {
  locale: string;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private cookieService = inject(CookieService);

  public setItem<T extends keyof LocalStorageState>(key: T, value: LocalStorageState[T]): void{
    this.cookieService.set(key, JSON.stringify(value), {expires: 365 * 100})
  }

  public getItem<T extends keyof LocalStorageState>(key: T): LocalStorageState[T] | null{
    const value = this.cookieService.get(key);

    return value ? JSON.parse(value) : null;
  }
}
