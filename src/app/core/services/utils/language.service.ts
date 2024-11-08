import {Injectable} from "@angular/core";

import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn:"root"
})
export class LanguageService {

  private languageSubject = new BehaviorSubject<string>('en'); // Default language
  currentLanguage$ = this.languageSubject.asObservable();

  public setLanguage(lang: string): void {
    this.languageSubject.next(lang);
  }
}
