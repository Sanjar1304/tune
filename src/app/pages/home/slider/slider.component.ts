import {ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";

import {TranslocoPipe} from "@jsverse/transloco";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

import {BannerRequestService} from "./banner.request.service";
import {BannerRes} from "../../../core/constants/bannerRes";


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass, TranslocoPipe, SlicePipe, NgOptimizedImage, NgIf],
  templateUrl: './slider.component.html',
  styles: `
    :host {
      @keyframes border-color-change {
        0% {
          border-color: transparent;
        }
        20% {
          border-color: #C7F6F8;
        }
        40% {
          border-color: #C7F6F8;
          border-left-color: #27C5D0; /* Transition starts on the left side */
        }
        60% {
          border-color: #C7F6F8;
          border-left-color: #27C5D0;
        }
        80% {
          border-color: #C7F6D0;
          border-left-color: #27C5D0;
        }
        100% {
          border-color: #27C5D0; /* Final color on all sides */
        }
      }

      .active-card {
        animation: border-color-change 5s forwards; /* Trigger animation only when the card is active */
        border: 2px solid transparent; /* Start with transparent border */
      }

      .inactive-card {
        border: 2px solid #E3FBFC; /* Inactive cards with a static border color */
        color: #262626;
      }

      .inactive-card h3 {
        color: #626262; /* Set h3 text color to #626262 */
      }

      .active-card h3 {
        color: #fff;
      }

      .outer {
        position: relative; /* Ensure that inner can be positioned relative to outer */
      }

      .inner {
        position: relative;
        background-color: #E3FBFC;
        transition: background-color 0.5s ease;
      }

      .active-card .inner {
        background-color: #27C5D0; /* Background color for active card */
      }
    }
  `,
})
export class SliderComponent implements OnInit, OnDestroy {

  currentIndex = 0;
  timer: any;
  transitionDuration = 5000; // duration for each slide in milliseconds
  banners!: BannerRes;

  private destroy$ = inject(DestroyRef)
  private cdr = inject(ChangeDetectorRef);
  private bannerService = inject(BannerRequestService);

  ngOnInit(): void {
    this.startAutoSlide();
    this.getBannersSubscription();
  }

  public getBannersSubscription(){
    this.bannerService.getBanner(0, 10)
      .pipe(takeUntilDestroyed(this.destroy$))
      .subscribe({
      next: res => {
        this.banners = res as BannerRes;
        console.log(this.banners)
        this.cdr.detectChanges();
      },
      error: err => console.log('slider from backend: ', err)
    })
  }

  public navigateToBanner(id?: string){
    if(id){
      this.bannerService.navigateToOne(id).subscribe(res => {
        console.log(res);
      })
    } else {
      this.bannerService.navigateToList({page: 0, size: 10}).subscribe(res => {
        console.log(res);
      })
    }
  }


  ngOnDestroy() {
    clearInterval(this.timer);
  }

  startAutoSlide() {
    this.timer = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.banners.items.length;
    }, this.transitionDuration);
  }

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    clearInterval(this.timer);
    this.startAutoSlide();
  }
}
