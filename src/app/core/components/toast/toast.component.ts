import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from "@angular/animations";
import {UiSvgIconComponent} from "../ui-svg-icon/ui-svg-icon.component";
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {CustomToasterService} from "../../services/utils/toast.service";
import {TranslocoPipe} from "@jsverse/transloco";

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    UiSvgIconComponent,
    NgClass,
    NgIf,
    NgOptimizedImage,
    TranslocoPipe
  ],
  templateUrl: './toast.component.html',
  styles: [
    `
      :host {
        display: block;
        padding: 0 !important;
        border:none;

        .custom-toast {
          display: flex;
          gap: 15px;
          padding: 16px;
          border-radius: 12px;
          color: #fff;
          position: fixed;
          top: 20px;
          right: 20px;
          transition: opacity 0.6s ease-in-out;
          z-index: 1000;
        }

        .success {
          background-color: #4CAF50;
        }

        .error {
          background-color: #F44336;
        }

        .info {
          background-color: #2196F3;
        }

        .warning {
          background-color: #FF9800;
        }
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
export class ToastComponent  implements OnInit{
  toast: { message: string, type: 'success' | 'error' | 'info' | 'warning' } | null = null;

  private cdr = inject(ChangeDetectorRef);
  private toasterService = inject(CustomToasterService);


  ngOnInit() {
    this.toasterService.toast$.subscribe((toast) => {
      this.toast = toast;
      this.cdr.markForCheck();
    });
  }

  getToastClass(type: string) {
    return type;
  }

  public closeToast(){
    this.toast = null;
    this.cdr.markForCheck();
  }
}
