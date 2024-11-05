import {ChangeDetectorRef, Component, DestroyRef, inject, OnDestroy, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgIf, NgOptimizedImage, SlicePipe} from "@angular/common";

import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

import {BannerRequestService} from "./services/banner.request.service";
import {Banner, BannerRes} from "../../../core/constants/bannerRes";
import {Router} from "@angular/router";
import {environment} from "../../../../environments/environment";
import {shareReplay, take} from "rxjs";


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass, SlicePipe, NgOptimizedImage, NgIf, AsyncPipe],
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
  transitionDuration = 5000;
  banners: BannerRes | null = null;
  bannerList: Banner[] = [];
  API_URL = `${environment.API_BASE}`

  private destroy$ = inject(DestroyRef)
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private bannerService = inject(BannerRequestService);

  ngOnInit(): void {
    this.getBannersSubscription();
  }

  public getBannersSubscription(){
    this.bannerService.getBanner(0, 10)
      .pipe(takeUntilDestroyed(this.destroy$), shareReplay(1))
      .subscribe({
        next: res => {
          this.banners = res as unknown as BannerRes;
          this.bannerList = this.banners.items.map(val => val.banner);
          this.startAutoSlide();
          this.cdr.detectChanges();
        },
        error: err => console.log('slider from backend: ', err)
    })
  }

  public navigateToBanner(url?: string) {
    console.log(url);
    console.log(`${this.API_URL}${url}`)
    this.router.navigateByUrl(`${this.API_URL}${url}`);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  public startAutoSlide() {
    this.timer = setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.bannerList.length;
      this.cdr.detectChanges();
    }, this.transitionDuration);
  }

  public setCurrentIndex(index: number) {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  private resetAutoSlide() {
    this.clearAutoSlide();
    this.startAutoSlide();
  }

  private clearAutoSlide() {
    // if (this.timer) {
    //   (this.timer);
    // }
    return this.timer
  }
}
