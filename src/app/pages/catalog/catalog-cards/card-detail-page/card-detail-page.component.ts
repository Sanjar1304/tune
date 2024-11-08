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
import {DecimalPipe, NgClass, NgFor, NgIf, NgOptimizedImage} from "@angular/common";

// import { BreadcrumbComponent } from "../../../../core/components/breadcrumb/breadcrumb.component";
import { BreadcrumbService } from "../../../../core/services/utils/breadcrumb.service";
import {CalculateCreditComponent} from "../../../home/calculate-credit/calculate-credit.component";
import {CardDetailCalculatorComponent} from "./card-detail-calculator/card-detail-calculator.component";
import {CatalogCardsService} from "../services/catalog-cards.service";
import {CustomCurrencyPipe} from "../../../../shared/pipes/custom-currency.pipe";
import {ICarDetailRes} from "../../../../core/constants/ICarDetailRes";
import {ICard} from "../../../../core/constants/cards";
import {RecommendationCardsComponent} from "../../../home/recommendation-cards/recommendation-cards.component";
import {filter} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {LanguageService} from "../../../../core/services/utils/language.service";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-card-detail-page',
  standalone: true,
  imports: [
    RouterModule,
    CalculateCreditComponent,
    CardDetailCalculatorComponent,
    RecommendationCardsComponent,
    CustomCurrencyPipe,
    NgIf,
    NgFor,
    DecimalPipe,
    NgClass,
    NgOptimizedImage,
    TranslocoPipe
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

  carInfos: Array<{id: number, slug: string, name: string,  value: string, valueTranslate: string}> = [];
  sellerName: string = '';
  sellerAddress: string = '';
  brandName: string = '';
  price: number = 0;
  currency: string = ''

  private destroy$ = inject(DestroyRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private catalogCardsService = inject(CatalogCardsService);
  private breadcrumbService = inject(BreadcrumbService);
  private languageService = inject(LanguageService);

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
          this.languageService.currentLanguage$
            .pipe(takeUntilDestroyed(this.destroy$))
            .subscribe(() => {
              this.loadCardDetails(id);
          })
        }
      });
  }


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



  public loadCardDetails(id: string): void {
    this.catalogCardsService.getCarById(id)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: (res) => {
            this.carFromBackend = res as ICarDetailRes;
            this.brandName = this.carFromBackend.resProperties
              .filter(value => value.slug == 'MARK')
              .map(val => val.valueTranslate) as unknown as string;
            this.carName = this.carFromBackend.resProperties
              .filter(value => value.slug == 'MARK_MODEL_CAR')
              .map(val => val.value)  as unknown as string;
            this.currency = this.carFromBackend.price.currency as unknown as string
            this.price = this.carFromBackend.price.amount as unknown as number;
            this.sellerName = this.carFromBackend.resProperties
              .filter(value => value.slug == 'SELLER_NAME')
              .map(val => val.value) as unknown as string;
            this.sellerAddress = this.carFromBackend.resProperties
              .filter(value => value.slug == 'REGION')
              .map(val => val.valueTranslate) as unknown as string
            this.displayImages = this.carFromBackend.images.map(image => image.link);
            this.selectedImage = this.displayImages.length > 0 ? this.displayImages[0] : 'assets/images/missing-img.png';
            this.resProperties = this.carFromBackend.resProperties || [];

            this.carInfos = this.carFromBackend.resProperties.map(prop => ({
              id: prop.id,
              slug: prop.slug,
              name: prop.name,
              value: prop.value,
              valueTranslate: prop.valueTranslate
            }));

            // this.breadcrumbService.updateBreadCrumbLabel(`${this.brandName}/${this.carName}`);

            this.scrollToTop();
            this.cdr.detectChanges();
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
