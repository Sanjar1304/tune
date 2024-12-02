import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { TranslocoPipe } from "@jsverse/transloco";
import { ProsService } from "./services/pros.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageService } from "../../../core/services/utils/language.service";
import { catchError, Observable, of, switchMap, tap } from "rxjs";
import { ProsModel } from "./models/pros.model";
import { ImageComponent } from '../../../shared/components';

@Component({
  selector: 'app-pros-cards',
  standalone: true,
  imports: [TranslocoPipe, ImageComponent],
  templateUrl: './pros-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProsCardsComponent implements OnInit {

  productList = signal<ProsModel | null>(null);

  private destroy$ = inject(DestroyRef);
  private prosService = inject(ProsService);
  private languageService = inject(LanguageService);

  public ngOnInit() {
    this.subscriptionWithLang().subscribe();
  }

  private subscriptionWithLang(): Observable<ProsModel | null> {
    return this.languageService.currentLanguage$
      .pipe(
        takeUntilDestroyed(this.destroy$),
        switchMap(() => this.prosService.getProsCards()),
        tap(res => this.productList.set(res)),
        catchError(err => of(err))
      );
  }

}
