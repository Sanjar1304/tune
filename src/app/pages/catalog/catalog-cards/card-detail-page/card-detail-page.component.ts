import {ActivatedRoute, NavigationEnd, Router, RouterModule} from "@angular/router";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  HostListener,
  OnInit,
  inject
} from '@angular/core';
import {CommonModule, NgFor, NgIf} from "@angular/common";

import { BreadcrumbComponent } from "../../../../core/components/breadcrumb/breadcrumb.component";
import { BreadcrumbService } from "../../../../core/services/utils/breadcrumb.service";
import {CalculateCreditComponent} from "../../../home/calculate-credit/calculate-credit.component";
import {CardDetailCalculatorComponent} from "./card-detail-calculator/card-detail-calculator.component";
import {CatalogCardsService} from "../services/catalog-cards.service";
import {CustomCurrencyPipe} from "../../../../shared/pipes/custom-currency.pipe";
import {ICarDetailRes} from "../../../../core/constants/ICarDetailRes";
import {ICard} from "../../../../core/constants/cards";
import {RecommendationCardsComponent} from "../../../home/recommendation-cards/recommendation-cards.component";
import {TranslocoPipe} from "@jsverse/transloco";
import {filter} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-card-detail-page',
  standalone: true,
  imports: [
    RouterModule,
    TranslocoPipe,
    CommonModule,
    CalculateCreditComponent,
    CardDetailCalculatorComponent,
    RecommendationCardsComponent,
    CustomCurrencyPipe,
    NgIf,
    NgFor,
    BreadcrumbComponent
],
  templateUrl: './card-detail-page.component.html',
  styles: `
    .ads-date {
      display: flex;
    }

    @media (max-width: 1023px) {
      .ads-date {
        order: 1;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDetailPageComponent implements OnInit {


  carName: string = '';
  carDetails: ICard | undefined;
  selectedImage: string = '';
  displayImages: string[] = [];
  resProperties: {name: string, value: string}[] = [];
  showAll: boolean = false;
  innerWidth: number = window.innerWidth;
  carFromBackend!: ICarDetailRes;

  private destroy$ = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);
  private breadcrumbService = inject(BreadcrumbService);


  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.innerWidth = window.innerWidth;
  }

  isFlexVisible(): boolean {
    return this.innerWidth >= 768 && this.innerWidth <= 1023;
  }

  isHidden(): boolean {
    return this.innerWidth >= 375 && this.innerWidth <= 767 || this.innerWidth > 1023;
  }

  public ngOnInit() {

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });

    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.loadCardDetails(id);
      }
    });
  }

  public loadCardDetails(id: string): void {
    this.catalogCardsService.getCarById(id)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: (res) => {
            this.carFromBackend = res as ICarDetailRes;
            this.displayImages = this.carFromBackend.images.map(image => image.link);
            this.selectedImage = this.displayImages.length > 0 ? this.displayImages[0] : 'assets/images/missing-img.png';
            this.resProperties = this.carFromBackend.resProperties || [];
            this.breadcrumbService.updateBreadCrumbLabel(this.carFromBackend.name);
            this.cdr.detectChanges();
            this.scrollToTop();
        },
        error: (err) => {
          console.error('Error fetching car details:', err);
        }
      });
  }

  private scrollToTop() {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }

  public onCardSelected(cardId: string){
    this.loadCardDetails(cardId);
    this.router.navigate(['/catalog', cardId], { replaceUrl: true }).then(() => {
      console.log('Navigated to new card:', cardId);
    });
  }

  public selectImage(index: number) {
    this.selectedImage = this.displayImages[index];
  }

  public showAllImages() {
    this.showAll = true;
  }

}
