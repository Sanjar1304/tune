import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {catchError, of} from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);

    getTranslation(lang: string) {
        return this.http.get<Translation>(`/assets/i18n/${lang}.json`)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              console.log(`Error loading translation file for language ${lang}`, error);
              return of({});
            }))
    }
}
