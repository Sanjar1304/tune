import {ChangeDetectionStrategy, Component, signal, ViewEncapsulation} from '@angular/core';
import {MatExpansionModule} from "@angular/material/expansion";
import {TranslocoPipe} from "@jsverse/transloco";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    MatExpansionModule,
    TranslocoPipe,
    NgOptimizedImage
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
export class FooterComponent {
  readonly panelOpenState = signal(false);
}
