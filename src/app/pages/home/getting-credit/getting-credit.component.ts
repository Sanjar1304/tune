import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";
import {GettingCreditService} from "./services/getting-credit.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {GettingCreditModel} from "./models/getting-credit.model";
import {LanguageService} from "../../../core/services/utils/language.service";
import {catchError, Observable, of, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-getting-credit',
  standalone: true,
  imports: [NgOptimizedImage, TranslocoPipe, AsyncPipe],
  templateUrl: './getting-credit.component.html',
  styles: `
    .custom-bullets {
      list-style: disc;
    }

    .custom-bullets li {
      position: relative;
      display: flex;
      align-items: center;
    }

    .custom-bullets li::before {
      content: "•"; /* Custom bullet */
      color: #C8C8C8; /* Default bullet color */
      margin-right: 12px; /* Space between bullet and text */
      font-size: 1.5em; /* Adjust size as needed */
    }

    @media screen and (min-width: 375px) and (max-width: 1024px){
      .custom-bullets li::before {
        color: #27C5D0; /* Default bullet color */
      }
    }

    .custom-scroll {
      scrollbar-width: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingCreditComponent implements OnInit{

  gettingCreditsList= signal<GettingCreditModel | null>(null) ;

  private destroy$ = inject(DestroyRef);
  private gettingCreditService = inject(GettingCreditService);
  private languageService = inject(LanguageService);

  public ngOnInit() {
   this.subscriptionWithLang().subscribe()
  }

  public subscriptionWithLang(): Observable<GettingCreditModel | null>{
    return this.languageService.currentLanguage$
      .pipe(
        takeUntilDestroyed(this.destroy$),
        switchMap(() => this.gettingCreditService.getCreditInfos()),
        tap(res => this.gettingCreditsList.set(res)),
        catchError( err => of(err))
      )

  }
}
