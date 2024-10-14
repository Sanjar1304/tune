import { ChangeDetectionStrategy, Component } from '@angular/core';
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-getting-credit',
  standalone: true,
  imports: [TranslocoPipe],
  templateUrl: './getting-credit.component.html',
  styles: `
    .custom-bullets {
      list-style: disc;
    }

    .custom-bullets li {
      position: relative;
      display: flex;
      align-items: center;
    }

    .custom-bullets li::before {
      content: "•"; /* Custom bullet */
      color: #C8C8C8; /* Default bullet color */
      margin-right: 12px; /* Space between bullet and text */
      font-size: 1.5em; /* Adjust size as needed */
    }

    @media screen and (min-width: 375px) and (max-width: 1024px){
      .custom-bullets li::before {
        color: #27C5D0; /* Default bullet color */
      }
    }

    .custom-scroll {
      scrollbar-width: none;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GettingCreditComponent {

}
