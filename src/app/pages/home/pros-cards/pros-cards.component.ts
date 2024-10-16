import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-pros-cards',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './pros-cards.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProsCardsComponent {

}
