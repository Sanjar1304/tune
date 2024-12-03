import { HttpInterceptorFn } from "@angular/common/http";
import { UserService } from "../services/root/user.service";
import { inject } from "@angular/core";
import { TranslocoService } from "@jsverse/transloco";


const langMapping: Record<string, string> = {
  en: 'ENG',
  uz: 'UZB',
  ru: 'RUS'
};

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(UserService);
  const translocoService = inject(TranslocoService);
  const lang = translocoService.getActiveLang();
  const mappedLang = langMapping[lang];
  const header = req.headers
    .set('Content-Type', 'application/json')
    .set('X-Lang', mappedLang)
    .set('X-Auth-Token', String(token.getToken()));

  const clonedReq = req.clone({ headers: header });
  return next(clonedReq);
}


export const authRequestCheckInterceptor: HttpInterceptorFn = (req, next) => {

  const isUserCheckRequest = req.url.includes('/auth/v1/external/sign/user/check');
  const issendOtpCode = req.url.includes('/auth/v1/external/sign/user/verify');
  const resendOtpCode = req.url.includes('auth/v1/external/sign/code/resend')

  const isSendEncryptedLoginPassword = req.url.includes('/auth/v1/external/sign/up-in');
  if (isUserCheckRequest || issendOtpCode || resendOtpCode || isSendEncryptedLoginPassword) {
    const headers = req.headers.set(
      'Authorization',
      'Basic dXNlcl9mb3JfbWFya2V0X2NsaWVudDptYXJLZXRDTGlFblRVU2Vy'
    ).set('Content-Type', 'application/json')
      .set('X-Device-Type', 'WEB')
    const clonedReq = req.clone({ headers });
    return next(clonedReq);
  }
  return next(req);
};


export const fileUploadInterceptor: HttpInterceptorFn = (req, next) => {

  const isFileUploadRequest = req.url.includes('/file/upload/general/car');

  if (isFileUploadRequest) {
    let headers = req.headers.set(
      'Authorization',
      'Basic bWFya2V0LWZyb250OjcwYXVLeE10UzZOSHhRQTQ='
    )

    if (headers.has('X-App-Build') &&
      headers.has('X-Device-Id') &&
      headers.has('X-Device-Type') &&
      headers.has('X-App-Build') &&
      headers.has('X-Device-Model') &&
      headers.has('X-App-Version') &&
      headers.has('X-OS') &&
      headers.has('Content-Type')) {
      headers = headers
        .delete('X-App-Build')
        .delete('X-Device-Id')
        .delete('X-Device-Type')
        .delete('X-App-Build')
        .delete('X-Device-Model')
        .delete('X-App-Version')
        .delete('X-OS')
        .delete('Content-Type')
    }

    const clonedReq = req.clone({ headers });
    return next(clonedReq);
  }
  return next(req);
}
