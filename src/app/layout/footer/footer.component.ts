import {ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, signal, ViewEncapsulation} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {NgOptimizedImage} from "@angular/common";
import {SocialService} from "./services/social.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {SocialModel} from "./models/social.model";
import {RouterLink} from "@angular/router";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatExpansionModule,
    NgOptimizedImage,
    RouterLink,
    TranslocoPipe,
  ],
  templateUrl: './footer.component.html',
  styles: `
    ul.custom-bullets {
      list-style: none;
    }

    :host ::ng-deep {
      .mat-expansion-panel {
        display: flex !important;
        flex-direction: column !important;
        box-shadow: none !important;
        background: #F3F3F3 !important;
        border-radius: 0 !important;
        padding: 0 !important;
      }

      .mat-expansion-panel-header {
        padding: 0 5px 0 0;
      }

      .mat-expansion-panel-header-title {
        background: #F3F3F3 !important;
      }

      .mat-expansion-panel:not(.mat-expanded)
      .mat-expansion-panel-header:not([aria-disabled=true]):hover {
        background: #F3F3F3 !important;
      }

      .mat-expansion-panel-body {
        padding: 0;
      }

      .mat-expansion-indicator svg {
        width: 34px !important;
        height: 34px !important;
        fill: #262626 !important;
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent implements OnInit{
  readonly panelOpenState = signal(false);

  socialList!: SocialModel;

  private destroy$ = inject(DestroyRef);
  private socialService = inject(SocialService);

  public ngOnInit() {
    this.socialsSubscription();
  }

  public socialsSubscription(){
    this.socialService.getSocials({page: 0, size: 10})
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
        next: res => {
          this.socialList = res as SocialModel;
        },
        error: err => console.log(err)
      })
  }
}
