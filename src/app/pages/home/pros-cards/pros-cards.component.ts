import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {TranslocoPipe} from "@jsverse/transloco";
import {ProsService} from "./services/pros.service";
import {Router} from "@angular/router";
import {pipe} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-pros-cards',
  standalone: true,
  imports: [NgOptimizedImage, TranslocoPipe],
  templateUrl: './pros-cards.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProsCardsComponent implements OnInit{

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private prosService = inject(ProsService);
  private router = inject(Router);

  public ngOnInit() {
    this.prosService.getProsCards()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => console.log(res),
        error: err => console.log(err)
      })
  }
}
