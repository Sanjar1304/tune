import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AsyncPipe, NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";
import {GettingCreditService} from "./services/getting-credit.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {GettingCreditModel} from "./models/getting-credit.model";
import {LanguageService} from "../../../core/services/utils/language.service";

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

  gettingCreditsList!: GettingCreditModel;

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private gettingCreditService = inject(GettingCreditService);
  private languageService = inject(LanguageService);

  public ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => {
        this.gettingCreditSubscription();
      })
  }

  public gettingCreditSubscription(){
    this.gettingCreditService.getCreditInfos()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.gettingCreditsList = res as unknown as GettingCreditModel;
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      })
  }
}
