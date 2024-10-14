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
import {JsonPipe, NgFor, NgIf, SlicePipe} from "@angular/common";

import { CarCatalogRes } from '../../../core/constants/carCatalogRes';
import {CatalogCardsService} from "../../catalog/catalog-cards/services/catalog-cards.service";
import {Router} from "@angular/router";
import {TranslocoPipe} from "@jsverse/transloco";
import { log } from 'console';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-recommendation-cards',
  standalone: true,
  imports: [TranslocoPipe, SlicePipe, NgIf, NgFor, JsonPipe],
  templateUrl: './recommendation-cards.component.html',
  styles: `
    .custom {
      margin: 0 auto !important;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecommendationCardsComponent implements OnInit{

  carCards!: CarCatalogRes;
  @Output() cardSelected: EventEmitter<string> = new EventEmitter<string>();

  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);

  public ngOnInit() {
    this.getCatalogCardsSubscription();
  }

  public getCatalogCardsSubscription(){
    this.catalogCardsService.getCatalogCards({ query: '' }, { page: 0, size: 10 })
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.carCards = res as CarCatalogRes;
          this.cdr.markForCheck();
        },
        error: err => console.log(err)
      })
  }

  public openCardContent(id: string){
    this.router.navigate(['/catalog', id]);
  }

  public navigateToCatalogPage(){
    this.router.navigate(['/catalog']);
  }

}
