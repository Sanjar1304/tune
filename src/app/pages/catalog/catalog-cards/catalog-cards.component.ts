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

  public ngOnInit() {
    this.getCatalogCardsSubscription();
  }

  private getCatalogCardsSubscription() {
    this.catalogCardsService.getCatalogCards({ query: '' }, { page: 0, size: 20 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          if (res) {
            this.catalogCardsRes = res;
            this.totalPages = Math.ceil(this.catalogCardsRes.items.length / this.cardsPerPage);
            this.visiblePageNumbers = Array.from({ length: this.totalPages }, (_, i) => i);
            this.loadInitialCards();  // Initialize first six cards
            this.cdr.detectChanges();
          }
        },
        error: err => console.log(err)
      });
  }

  private loadInitialCards() {
    this.displayedCards = this.catalogCardsRes.items.slice(0, this.cardsPerPage);
  }

  public openCardContent(id: string) {
    this.router.navigate(['/catalog', id]);
  }

  public loadMoreCards(): void {
    const start = this.displayedCards.length;
    const end = start + this.cardsPerPage;
    const newCards = this.catalogCardsRes.items.slice(start, end);
    this.displayedCards = [...this.displayedCards, ...newCards];
    this.cdr.detectChanges();
  }


  public loadPage(pageIndex: number): void {
    this._currentPage = pageIndex;
    const start = pageIndex * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.displayedCards = this.catalogCardsRes.items.slice(start, end);
    this.cdr.detectChanges();
  }

  public get currentPage(): number {
    return this._currentPage;
  }
}
