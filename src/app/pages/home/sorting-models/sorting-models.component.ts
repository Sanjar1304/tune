import {ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, OnInit, inject} from '@angular/core';

import { SortingModel } from './models/sorting.model';
import {SortingModelService} from "./sorting-model.service";
import {TranslocoPipe} from "@jsverse/transloco";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-sorting-models',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './sorting-models.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortingModelsComponent implements OnInit{

  public carModels!: any

  private destroy$ = inject(DestroyRef);
  private cdr = inject(ChangeDetectorRef);
  private sortingModels = inject(SortingModelService);

  public ngOnInit() {
    this.getModelsSubscription();
  }

  public getModelsSubscription(){
    this.sortingModels.getModels()
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
      next: res => {
        console.log(res);
        this.carModels = res;
        this.cdr.detectChanges();
      },
      error: err => console.log(err)
    });
  }
}
