import {HttpInterceptorFn} from "@angular/common/http";
import { UserService } from "../services/root/user.service";
import { inject } from "@angular/core";

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(UserService);
  const header = req.headers
    .set('Content-Type', 'application/json')
    .set('X-Device-Id', '42b6e24e2fc8df5b')
    .set('X-Device-Type', 'phone')
    .set('X-OS', 'android')
    .set('X-App-version', '1.0.0')
    .set('X-App-Version', '1.0')
    .set('X-App-Build', '1.0')
    .set('X-Device-Model', 'samsung s 24')
    .set('X-Lang', 'RUS')
    .set('X-Auth-Token', String(token.getToken()));

    const clonedReq = req.clone({headers: header});
    return next(clonedReq);
}


export const authRequestCheckInterceptor: HttpInterceptorFn = (req, next) => {
  const isUserCheckRequest = req.url.includes('/auth/v1/external/sign/user/check');
  const issendOtpCode = req.url.includes('/auth/v1/external/sign/user/verify');
  const isSendEncryptedLoginPassword = req.url.includes('/auth/v1/external/sign/up-in');
  if (isUserCheckRequest ||  issendOtpCode || isSendEncryptedLoginPassword) {
    const headers = req.headers.set(
      'Authorization',
      'Basic dXNlcl9mb3JfbWFya2V0X2NsaWVudDptYXJLZXRDTGlFblRVU2Vy'
    );
    const clonedReq = req.clone({ headers });
    return next(clonedReq);
  }
  return next(req);
};
