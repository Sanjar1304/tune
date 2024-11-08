import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  EventEmitter,
  OnInit,
  Output,
  inject
} from '@angular/core';
import {AsyncPipe, DecimalPipe, JsonPipe, NgFor, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";

import { CarCatalogRes } from '../../../core/constants/carCatalogRes';
import {CatalogCardsService} from "../../catalog/catalog-cards/services/catalog-cards.service";
import {Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {TranslocoPipe} from "@jsverse/transloco";
import {LanguageService} from "../../../core/services/utils/language.service";


@Component({
  selector: 'app-recommendation-cards',
  standalone: true,
  imports: [SlicePipe, NgIf, NgFor, JsonPipe, DecimalPipe, NgOptimizedImage, AsyncPipe, TranslocoPipe],
  templateUrl: './recommendation-cards.component.html',
  styles: `
    .custom {
      margin: 0 auto !important;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationCardsComponent implements OnInit{

  bg_color = 'green';
  cardsPerPage: number = 6;
  carCards!: CarCatalogRes;
  displayedCards: any[] = [];

  @Output() cardSelected: EventEmitter<string> = new EventEmitter<string>();

  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);
  private languageService = inject(LanguageService);

  public ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() => {
        this.getCatalogCardsSubscription();
      })
  }

  public getCatalogCardsSubscription(){
    this.catalogCardsService.getCatalogCards({ query: '' }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carCards = res as unknown as CarCatalogRes;
          this.loadInitialCards();
          this.cdr.markForCheck();
        },
        error: err => console.log(err)
      })
  }

  private loadInitialCards() {
    this.displayedCards = this.carCards.items.slice(0, this.cardsPerPage);
  }

  public openCardContent(id: string){
    this.router.navigate(['/catalog', id]);
  }

  public navigateToCatalogPage(){
    this.router.navigate(['/catalog']);
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

}
