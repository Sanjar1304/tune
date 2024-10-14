import {
  ChangeDetectionStrategy,
  Component,
  model,
} from '@angular/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-catalog-sorting',
  standalone: true,
  imports: [
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
  ],
  templateUrl: './catalog-sorting.component.html',
  styles: `
    :host {
      ::ng-deep {
        .mat-mdc-radio-button .mdc-radio__outer-circle {
          border-radius: 5px;
        }

        .mdc-label {
          color: #A1A1A1;
        }

        .mat-mdc-radio-button .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle {
          border-color: #A1A1A1;
        }
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogSortingComponent{

  readonly checked = model(false);
  readonly indeterminate = model(false);
  labelPosition = model<'Торг есть' | 'Автосалон' | 'C фото'>('Торг есть');
  readonly disabled = model(false);

}
