import { Injectable, inject } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { Router } from "@angular/router";
import { UserDataDto } from "../../models/user.model";
import { UtilsService } from "../utils/utils.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private userLoginData$$ = new BehaviorSubject<UserDataDto | null>(null);
  userInfo$ = new BehaviorSubject(null);
  userLoginData$ = this.userLoginData$$.asObservable();
  userInfo = this.userInfo$.asObservable();

  private router = inject(Router);
  private utilService = inject(UtilsService);

  public constructor() {
    const storedUserData = this.getUserLocalData();
    if (storedUserData) {
      const userData: UserDataDto = JSON.parse(storedUserData);
      this.setUserData(userData);
    }
  }

  public getUserSpecificData(type: any): string {
    console.log('type', type)
    const value: UserDataDto | null = this.userLoginData$$.getValue()
    if (value?.user && type in value.user) {
      return (value as any).user[type];
    } else {
      return ''
    }
  }


  public setUserData(data: UserDataDto | null) {
    this.userLoginData$$.next(data);
    if (!data) return;
  }

  public setToken = (token: string): void => {
    localStorage.setItem('token', token);
  }

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setUserLocalData(data: UserDataDto): void {
    localStorage.setItem('user', JSON.stringify(data));
  }

  public getUserLocalData(): string | null {
    return localStorage.getItem('user');
  }


  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('x-fcm-token');
    localStorage.removeItem('user');
    this.utilService.menuState$.next('main')
    this.router.navigate(['/auth']);
    this.userLoginData$$.next(null);
  }
}
