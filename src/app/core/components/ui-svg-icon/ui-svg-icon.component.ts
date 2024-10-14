import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
  selector: 'app-ui-svg-icon',
  standalone: true,
  imports: [],
  templateUrl: './ui-svg-icon.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiSvgIconComponent {
  public path = input.required<string>();
  public svgClass = input<string>();
  public viewBox = input<string>();
}
