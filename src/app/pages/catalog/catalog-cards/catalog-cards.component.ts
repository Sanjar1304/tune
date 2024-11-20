import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from "@angular/common";

import { CarCatalogRes } from "../../../core/constants/carCatalogRes";
import { CatalogCardsService } from "./services/catalog-cards.service";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TranslocoPipe } from "@jsverse/transloco";
import { LanguageService } from "../../../core/services/utils/language.service";
import { CatalogDataService } from "../services/catalog-data.service";

@Component({
  selector: 'app-catalog-cards',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslocoPipe],
  templateUrl: './catalog-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      .pagination {
        display: flex;
        gap: 8px;
        margin-top: 16px;
      }

      .page-button {
        border: none;
        background: none;
        padding: 8px 12px;
        cursor: pointer;
        font-size: 16px;
        color: #333;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }

      .page-button:hover {
        background-color: #e0e0e0;
      }

      .page-button.active {
        background-color: #27C5D0;
        color: white;
      }
    }
  `,
})
export class CatalogCardsComponent implements OnInit {

  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);
  private languageService = inject(LanguageService);
  private catalogDataService = inject(CatalogDataService);


  public displayedCards: CarCatalogRes['items'] = [];
  public catalogCardsRes!: CarCatalogRes;
  public catalogCardsLength: number = 0;
  public _currentPage: number = 0;  // Default page 0
  public pagesLength: number = 0;
  cardsPerPage: number = 10;
  pagesArray: number[] = [];
  private dataSourceType: 'DEFAULT' | 'SORTING' = 'DEFAULT';



  ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => {
        this.subscribeToCatalogData();
      });

    this.catalogDataService.dataSourceType$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((type) => {
        this.dataSourceType = type;
        this.cdr.markForCheck();
      });

    this.catalogDataService.currentPaging$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((paging) => {
        this._currentPage = paging.page;
        this.cardsPerPage = paging.size;
        this.updateDisplayedCards();
        this.cdr.markForCheck();
      });

    if (this.dataSourceType === 'DEFAULT') {
      this.getCatalogCardsSubscription(this._currentPage);
    }
  }

  private subscribeToCatalogData() {
    this.catalogDataService.catalogData$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.catalogCardsRes = data;
          this.catalogCardsLength = data.paging.totalItems;
          this.pagesLength = data.paging.totalPages;
          this.pagesArray = Array.from({ length: this.pagesLength }, (_, i) => i);
          this.updateDisplayedCards();
          this.cdr.markForCheck();
        }
      });
  }

  private updateDisplayedCards() {
    if (this.catalogCardsRes && this.catalogCardsRes.items) {
      const start = this._currentPage * this.cardsPerPage;
      const end = start + this.cardsPerPage;
      this.displayedCards = this.catalogCardsRes.items.slice(start, end);
    }
  }

  private getCatalogCardsSubscription(page: number) {
    const requestData = {
      query: '',
      paging: { page, size: this.cardsPerPage },
    };

    this.catalogCardsService.getCatalogCards(requestData)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe((res) => {
        if (res) {
          if (this.dataSourceType === 'DEFAULT') {
            this.catalogCardsRes = res;
            this.catalogCardsLength = this.catalogCardsRes.paging.totalItems; // Total items across all pages
            this.pagesLength = this.catalogCardsRes.paging.totalPages; // Total number of pages
            this.displayedCards = [...this.displayedCards, ...this.catalogCardsRes.items]; // Append new items to displayedCards
            this.pagesArray = Array.from({ length: this.pagesLength }, (_, i) => i); // Generate pages array
            this.cdr.markForCheck();
          } else {
            this.catalogDataService.updateCatalogData(res);
            this.cdr.detectChanges();
          }
        }
      });
  }

  // Open the car detail page on click
  public openCardContent(id: string) {
    this.router.navigate(['/catalog', id]);
  }

  openMore() {
    if (this._currentPage < this.pagesLength - 1) {
      this._currentPage++;
      if (this.dataSourceType === 'DEFAULT') {
        this.getCatalogCardsSubscription(this._currentPage);
        this.displayedCards = [];
        this.cdr.detectChanges()
      } else {
        this.updateDisplayedCards();
        this.cdr.detectChanges();
      }
      if (this.dataSourceType === 'SORTING') {
        this.catalogDataService.updatePaging({ page: this._currentPage, size: this.cardsPerPage });
        this.cdr.markForCheck();
      }
    }
  }


  onCustomPageChange(pageIndex: number) {
    this._currentPage = pageIndex;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (this.dataSourceType === 'DEFAULT') {
      this.getCatalogCardsSubscription(this._currentPage);
      this.displayedCards = [];
    } else if (this.dataSourceType === 'SORTING') {
      this.catalogDataService.updatePaging({ page: this._currentPage, size: this.cardsPerPage });
      this.catalogDataService.catalogData$
        .pipe(takeUntilDestroyed(this.destroy$))
        .subscribe((data) => {
          if (data) {
            this.catalogCardsRes = data;
            this.displayedCards = [];
            this.displayedCards = [...this.displayedCards, ...this.catalogCardsRes.items];// Refresh displayedCards with the new page's data
            this.cdr.markForCheck(); // Trigger UI update
          }
        });
    }
  }


  isLastPage(): boolean {
    return this._currentPage >= this.pagesLength - 1;
  }

  public getCarDetail(properties: any[], slug: string): string {
    const detail = properties.find(prop => prop.slug === slug);
    if (detail) {
      return Array.isArray(detail.valueTranslate)
        ? detail.valueTranslate.join(', ')
        : detail.valueTranslate || detail.value || '';
    }
    return '';
  }

}



