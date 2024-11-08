import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit, signal} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {FaqsService} from "./services/faqs.service";
import {FaqsModel} from "./models/faqs.model";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TranslocoPipe} from "@jsverse/transloco";
import {LanguageService} from "../../../core/services/utils/language.service";

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

  faqList!: FaqsModel

  private destroy$ = inject(DestroyRef);
  private faqService = inject(FaqsService);
  private cdr = inject(ChangeDetectorRef);
  private languageService = inject(LanguageService);


  public ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => {
        this.faqSubscription();
      })
  }

  public  faqSubscription(){
    this.faqService.getFaqsData({page: 0, size: 10, filter: {productId: '3fa85f64-5717-4562-b3fc-2c963f66afa6', faqProductType: 'ALL', }})
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.faqList = res as unknown as FaqsModel;
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      })
  }
}
