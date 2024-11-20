import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {FaqsService} from "./services/faqs.service";
import {FaqsModel} from "./models/faqs.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TranslocoPipe} from "@jsverse/transloco";
import {LanguageService} from "../../../core/services/utils/language.service";
import {catchError, Observable, of, switchMap, tap} from "rxjs";

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    MatExpansionModule,
    TranslocoPipe
  ],
  templateUrl: './faqs.component.html',
  styles: `
    ul.custom-bullets {
      list-style: disc;
      padding-left: 20px;
    }

    ul.custom-bullets li::marker {
      color: #27C5D0;
    }

    :host ::ng-deep {
      .mat-expansion-panel {
        display: flex ;
        flex-direction: column;
        box-shadow: none !important;
        background: #F7F7F7;
        border-radius: 24px !important;
        padding: 24px 32px;
      }

      @media screen and (min-width: 375px) {
        .mat-expansion-panel {
          padding: 24px;
        }
      }

      .mat-expansion-panel-header {
        height: auto;
        gap: 16px;
        padding: 0 !important;
      }

      .mat-expansion-panel-body {
        padding: 0 !important;
      }

      .mat-expansion-panel-spacing {
        margin: 0 !important;
      }

      .mat-expansion-indicator svg {
        width: 38px !important;
        height: 38px !important;
        fill: #262626 !important;
      }

      .mat-expansion-panel:not(.mat-expanded)
      .mat-expansion-panel-header:not([aria-disabled=true]):hover {
        background: #F7F7F7 !important;
      }

      .mat-expansion-panel-header.mat-expanded  {
        height: auto !important;
      }

      .mat-panel-title {
        width: 830px !important;
      }

      .mat-typography p {
        margin: 0 !important;
      }

      .mat-accordion .mat-expansion-panel:not(.mat-expanded),
      .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
        border-radius: 24px !important;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqsComponent implements OnInit{

  readonly panelOpenState = signal(false);
  page = signal<number>(0);
  size = signal<number>(10);
  faqList = signal<FaqsModel | null>(null)

  private destroy$ = inject(DestroyRef);
  private faqService = inject(FaqsService);
  private languageService = inject(LanguageService);


  public ngOnInit() {
    this.subscriptionWithLang().subscribe()
  }

  public subscriptionWithLang(): Observable<FaqsModel | null>{
    return this.languageService.currentLanguage$
      .pipe(
        takeUntilDestroyed(this.destroy$),
        switchMap(() => this.faqService.getFaqsData({
            page: this.page(),
            size: this.size(),
            filter: {productId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', faqProductType: 'ALL', }
          })
        ),
        tap(res => this.faqList.set(res)),
        catchError(err => of(err))
      )
  }
}
