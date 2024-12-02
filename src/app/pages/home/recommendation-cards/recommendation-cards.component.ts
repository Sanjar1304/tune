import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  OnInit,
  inject, signal, computed,
  output
} from '@angular/core';
import { DecimalPipe, NgOptimizedImage } from "@angular/common";

import { CarCatalogRes } from '../../../core/constants/carCatalogRes';
import { CatalogCardsService } from "../../catalog/catalog-cards/services/catalog-cards.service";
import { Router } from "@angular/router";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TranslocoPipe } from "@jsverse/transloco";
import { LanguageService } from "../../../core/services/utils/language.service";
import { catchError, EMPTY, Observable, of, switchMap, tap } from "rxjs";
import { FavouriteApiService } from './favourite.api.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../auth/services/auth.service';


@Component({
  selector: 'app-recommendation-cards',
  standalone: true,
  imports: [
    DecimalPipe,
    NgOptimizedImage,
    TranslocoPipe
  ],
  templateUrl: './recommendation-cards.component.html',
  styles: `
    .custom {
      margin: 0 auto !important;
    }
  `,
  providers: [FavouriteApiService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationCardsComponent implements OnInit {
  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  private catalogCardsService = inject(CatalogCardsService);
  private languageService = inject(LanguageService);
  private favouriteApiService = inject(FavouriteApiService)
  private toastrService = inject(ToastrService);
  public authService = inject(AuthService)

  bg_color = signal<string>('green');
  page = signal<number>(0);
  size = signal<number>(10);
  cardsPerPage = signal<number>(6);
  carCards = signal<CarCatalogRes | null>(null);


  displayedCards = computed(() => {
    const cards = this.carCards()?.items ?? [];
    return cards.slice(0, this.cardsPerPage());
  });


  cardSelected = output<string>();

  public ngOnInit() {
    this.subscriptionWithLang().subscribe();
  }

  public subscriptionWithLang(): Observable<CarCatalogRes | null> {
    return this.languageService.currentLanguage$
      .pipe(
        takeUntilDestroyed(this.destroy$),
        switchMap(() => this.catalogCardsService.getCatalogCards({
          query: '', paging: { page: this.page(), size: this.size() }
        })),
        tap(res => this.carCards.set(res)),
        catchError(err => EMPTY)
      )
  }

  public changeFavorite(event: Event, isFavorite: boolean, productId: string): void {
    event.stopPropagation();
    const request$ = isFavorite ? this.favouriteApiService.removeProductFromFavourite(productId) : this.favouriteApiService.addProductToFavourite(productId);
    request$.pipe(
      tap((res) => {
        if (res.success) {
          this.changeIsFavouriteCustom(productId, isFavorite)
        }
      })
    ).subscribe()
  }


  public openCardContent(id: string) {
    this.router.navigate(['/catalog', id], { replaceUrl: true });
    console.log(id)
  }

  public navigateToCatalogPage() {
    this.router.navigate(['/catalog']);
  }

  public getCarDetail(properties: any[], slug: string): string {
    const detail = properties.find(prop => prop.slug === slug);
    if (!detail) return '';
    const { valueTranslate, value } = detail;

    if (Array.isArray(valueTranslate)) {
      return valueTranslate.join(', ');
    }
    return valueTranslate || value || '';
  }

  private changeIsFavouriteCustom(productId: string, isFavorite: boolean): void {
    const carCards = this.carCards();

    if (!carCards || !carCards.items) {
      return;
    }

    const updatedCards = {
      ...carCards,
      items: carCards.items.map((item) =>
        item.productId === productId
          ? { ...item, isFavorite: !isFavorite }
          : item
      ),
    };

    this.carCards.set(updatedCards);
  }


}
