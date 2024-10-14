import {ChangeDetectionStrategy, Component } from '@angular/core';
import {Toast, ToastPackage, ToastrService} from "ngx-toastr";
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {UiSvgIconComponent} from "../ui-svg-icon/ui-svg-icon.component";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    UiSvgIconComponent
  ],
  templateUrl: './toast.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 0 !important;
        border:none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('flyInOut', [
      state(
        'inactive',
        style({
          display: 'none',
          opacity: 0,
        })
      ),
      transition(
        'inactive => active',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              opacity: 0,
            }),
            style({
              opacity: 1,
            }),
          ])
        )
      ),
      transition(
        'active => removed',
        animate(
          '400ms ease-out',
          keyframes([
            style({
              opacity: 1,
            }),
            style({
              transform: 'translate3d(10%, 0, 0) skewX(10deg)',
              opacity: 0,
            }),
          ])
        )
      ),
    ]),
  ],
  preserveWhitespaces: false
})
export class ToastComponent extends Toast {

  constructor(protected override toastrService:ToastrService,
              public override toastPackage:ToastPackage) {
    super(toastrService, toastPackage);
  }

  action(event: Event){
    event.stopPropagation();
    this.toastPackage.triggerAction(event);
    return false;
  }
}
