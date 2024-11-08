import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";
import {ProsService} from "./services/pros.service";
import {Router} from "@angular/router";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ProductModel, ProsModel} from "./models/pros.model";
import {LanguageService} from "../../../core/services/utils/language.service";

@Component({
  selector: 'app-pros-cards',
  standalone: true,
  imports: [NgOptimizedImage, TranslocoPipe],
  templateUrl: './pros-cards.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProsCardsComponent implements OnInit{

  productList: ProsModel | null = null;
  product: ProductModel[] = [];

  private router = inject(Router);
  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private prosService = inject(ProsService);
  private languageService = inject(LanguageService);

  public ngOnInit() {
    this.languageService.currentLanguage$
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(() =>{
        this.gettingProsData();
      })
  }

  public gettingProsData(){
    this.prosService.getProsCards()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.productList = res as unknown as ProsModel;
          this.product = this.productList.items.map(val => val.banner);
          this.cdr.detectChanges();
        },
        error: err => console.log(err)
      })
  }
}
