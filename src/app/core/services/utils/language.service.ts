import { inject, Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { StorageService } from "../../../shared/services/storage.service";
import { Constants } from "../../constants";
import { TranslocoService } from "@jsverse/transloco";

@Injectable({
  providedIn: "root"
})
export class LanguageService {
  private storageService = inject(StorageService)
  private translocoService = inject(TranslocoService)

  constructor() {
    const savedLang = this.storageService.language;
    this.setLanguage(savedLang);
  }
  private languageSubject = new BehaviorSubject<string>(this.storageService.language);
  currentLanguage$ = this.languageSubject.asObservable();

  public setLanguage(lang: string): void {
    this.languageSubject.next(lang);
    this.translocoService.setActiveLang(lang);
  }
}
