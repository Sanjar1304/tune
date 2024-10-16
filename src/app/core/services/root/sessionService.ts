import {inject, Injectable} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {UserService} from "./user.service";
import {UtilsService} from "../utils/utils.service";
import {BackendResponseModel} from "../../models/backend-response.model";
import {HttpErrorResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SessionService {

  private toastService = inject(ToastrService);
  private userService = inject(UserService);
  private utilService = inject(UtilsService);

  public handleResponse = <T>(response: BackendResponseModel<T>): T => {
    const { message } = response.result;

    if(message === 'Не авторизован') this.userService.logout();
    if(!response.success && typeof message === 'string') this.toastService.error(message ? message : 'Что то пошло не так...');
    if(!response.success && Array.isArray(message)) message.forEach(message => this.toastService.error(message));
    this.utilService.spinnerState$.next(false);
    return response.result.data
  }

  public handleError = (err: HttpErrorResponse): Observable<null> => {
    const { message } = err;

    if(message) this.toastService.error(message ? message : 'Что то пошло не так...');
    if(Array.isArray(message)) message.forEach(message => this.toastService.error(message))
    this.utilService.spinnerState$.next(false);
    return of(null);
  }
}
