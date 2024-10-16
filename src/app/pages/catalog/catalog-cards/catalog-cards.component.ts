import {CARS_CARD_LIST, ICard} from "../../../core/constants/cards";
import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from "@angular/common";

import {CarCatalogRes} from "../../../core/constants/carCatalogRes";
import {CatalogCardsService} from "./services/catalog-cards.service";
import {Router} from "@angular/router";
import {TranslocoPipe} from "@jsverse/transloco";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-catalog-cards',
  standalone: true,
  imports: [TranslocoPipe, CommonModule, NgOptimizedImage],
  templateUrl: './catalog-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ``,
})
export class CatalogCardsComponent implements OnInit{

  cardsPerPage: number = 6;
  public totalPages: number;
  public displayedCards: ICard[] = [];
  public visiblePageNumbers: number[] = [];
  public catalogCardsRes!: CarCatalogRes;
  private _currentPage: number = 0;

  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);

  public constructor() {
    this.totalPages = Math.ceil(CARS_CARD_LIST.length / this.cardsPerPage);
    this.loadMoreCards();
    this.loadPage(0);
    this.updateVisiblePageNumbers();
  }

  public ngOnInit() {
    this.getCatalogCardsSubscription();
  }

  public getCatalogCardsSubscription() {
    this.catalogCardsService.getCatalogCards({ query: '' }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.catalogCardsRes = res as CarCatalogRes;
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      });
  }

  public get catalogCards(): ICard[] {
    return CARS_CARD_LIST;
  }

  public openCardContent(id: string){
    this.router.navigate(['/catalog', id]);
  }

  public loadMoreCards(): void{
    const start = this._currentPage * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    const newCards = this.catalogCards.slice(start, end);
    this.displayedCards = [...this.displayedCards, ...newCards];
    this._currentPage++;
  }

  public loadPage(pageIndex: number): void {
    this._currentPage = pageIndex;
    const start = pageIndex * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.displayedCards = this.catalogCards.slice(start, end);
    this.updateVisiblePageNumbers();
  }

  public updateVisiblePageNumbers(): void {
    const maxDisplayedDots = 4;
    this.visiblePageNumbers = [];

    if (this.totalPages <= maxDisplayedDots) {
      for (let i = 0; i < this.totalPages; i++) {
        this.visiblePageNumbers.push(i);
      }
    } else {
      const start = Math.max(0, Math.min(this._currentPage - 2, this.totalPages - maxDisplayedDots));
      const end = start + maxDisplayedDots - 1;

      if (start > 0 && end < this.totalPages - 1) {
        if (start > this.totalPages - end - 1) {
          // Display three dots on the left side
          this.visiblePageNumbers.push(0);
          this.visiblePageNumbers.push(-1); // For '...'
          for (let i = start; i <= end; i++) {
            this.visiblePageNumbers.push(i);
          }
          this.visiblePageNumbers.push(this.totalPages - 1); // Last page
        } else {
          // Display three dots on the right side
          for (let i = start; i <= end; i++) {
            this.visiblePageNumbers.push(i);
          }
          this.visiblePageNumbers.push(-1); // For '...'
          this.visiblePageNumbers.push(this.totalPages - 1); // Last page
        }
      } else if (start === 0) {
        // Only show the right-side dots
        for (let i = start; i <= end; i++) {
          this.visiblePageNumbers.push(i);
        }
        this.visiblePageNumbers.push(-1); // For '...'
        this.visiblePageNumbers.push(this.totalPages - 1); // Last page
      } else {
        // Only show the left-side dots
        this.visiblePageNumbers.push(0); // First page
        this.visiblePageNumbers.push(-1); // For '...'
        for (let i = start; i <= end; i++) {
          this.visiblePageNumbers.push(i);
        }
      }
    }
  }

  public get currentPage(): number {
    return this._currentPage;
  }
}
