import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

import {CarCatalogRes} from "../../../core/constants/carCatalogRes";
import {CatalogCardsService} from "./services/catalog-cards.service";
import {Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TranslocoPipe} from "@jsverse/transloco";
import {LanguageService} from "../../../core/services/utils/language.service";
import {CatalogDataService} from "../services/catalog-data.service";

@Component({
  selector: 'app-catalog-cards',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslocoPipe],
  templateUrl: './catalog-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export class CatalogCardsComponent implements OnInit{

  bg_color = 'blue';
  cardsPerPage: number = 6;
  public totalPages: number = 0;
  public displayedCards: any[] = [];
  public visiblePageNumbers: number[] = [];
  public catalogCardsRes!: CarCatalogRes;
  public catalogCardsLength: number = 0;
  private _currentPage: number = 0;

  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);
  private languageService = inject(LanguageService);
  private catalogDataService = inject(CatalogDataService);

  public ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => {
        this.catalogDataService.catalogData$.subscribe(data => {
          if(data){
            this.catalogCardsRes = data;
            this.displayedCards = data.items; // Set displayedCards to the received data items
            this.cdr.detectChanges();
          } else {
            this.getCatalogCardsSubscription();
          }
        })
    })
  }

  private getCatalogCardsSubscription() {
    this.catalogCardsService.getCatalogCards({ query: '' }, { page: 0, size: 20 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          if (res) {
            this.catalogCardsRes = res;
            this.catalogCardsLength = this.catalogCardsRes.items.length;
            this.totalPages = Math.ceil(this.catalogCardsRes.items.length / this.cardsPerPage);
            this.updateVisiblePageNumbers();
            this.loadInitialCards();  // Initialize first six cards
            this.cdr.detectChanges();
          }
        },
        error: err => console.log(err)
      });
  }

  public getCarDetail(properties: any[], slug: string): string {
    const detail = properties.find(prop => prop.slug === slug);
    if (detail) {
      if (Array.isArray(detail.valueTranslate)) {
        return detail.valueTranslate.join(', ');
      } else if (detail.valueTranslate) {
        return detail.valueTranslate;
      } else if (detail.value) {
        return detail.value;
      }
    }
    return '';
  }

  public get currentPage(): number {
    return this._currentPage;
  }

  public openCardContent(id: string) {
    this.router.navigate(['/catalog', id]);
  }

  public loadMoreCards(): void {
    const start = this.displayedCards.length;
    const end = start + this.cardsPerPage;
    const newCards = this.catalogCardsRes.items.slice(start, end);
    this.displayedCards = [...this.displayedCards, ...newCards];

    if (this.displayedCards.length >= this.catalogCardsRes.items.length) {
      this._currentPage = this.totalPages - 1;
      this.hideLoadMoreButton(); // Hide "Load More" on the last page
    } else {
      this._currentPage = Math.floor(this.displayedCards.length / this.cardsPerPage) - 1;
    }
    this.updateVisiblePageNumbers();
    this.cdr.detectChanges();
  }

  public loadPage(pageIndex: number): void {
    this._currentPage = pageIndex;
    const start = pageIndex * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.displayedCards = this.catalogCardsRes.items.slice(start, end);

    this.updateVisiblePageNumbers();

    if (pageIndex === this.totalPages - 1) {
      this.hideLoadMoreButton(); // Hide button on last page
    } else {
      this.showLoadMoreButton(); // Show button for all other pages
    }

    this.cdr.detectChanges();
  }

  private loadInitialCards() {
    this.displayedCards = this.catalogCardsRes.items.slice(0, this.cardsPerPage);
  }

  private updateVisiblePageNumbers() {
    this.visiblePageNumbers = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  private hideLoadMoreButton(): void {
    const loadMoreButton = document.querySelector('.custom-button');
    if (loadMoreButton) {
      loadMoreButton.setAttribute('disabled', 'true');
      loadMoreButton.classList.add('hidden');
    }
  }

  private showLoadMoreButton(): void {
    const loadMoreButton = document.querySelector('.custom-button');
    if (loadMoreButton) {
      loadMoreButton.removeAttribute('disabled');
      loadMoreButton.classList.remove('hidden');
    }
  }
}
