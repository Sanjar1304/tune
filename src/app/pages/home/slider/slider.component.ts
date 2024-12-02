import { Component, DestroyRef, inject, OnDestroy, OnInit, Sanitizer, Signal, signal } from '@angular/core';
import { AsyncPipe, NgClass, NgIf, NgOptimizedImage, SlicePipe } from "@angular/common";

import { takeUntilDestroyed, toSignal } from "@angular/core/rxjs-interop";

import { BannerRequestService } from "./services/banner.request.service";
import { Banner, BannerRes } from "../../../core/constants/bannerRes";
import { Router } from "@angular/router";
import { environment } from "../../../../environments/environment";
import { BehaviorSubject, catchError, distinctUntilChanged, EMPTY, filter, finalize, forkJoin, interval, map, Observable, of, share, Subscription, switchMap, take, takeWhile, tap } from "rxjs";
import { LanguageService } from "../../../core/services/utils/language.service";
import { FileService } from '../../../shared/services';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { LoaderComponent } from '../../../shared/components';


@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [NgClass, LoaderComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit, OnDestroy {
  private destroy$ = inject(DestroyRef)
  private router = inject(Router);
  private bannerService = inject(BannerRequestService);
  private languageService = inject(LanguageService);
  public fileService = inject(FileService)
  private domSanitizer = inject(DomSanitizer)


  private readonly API_URL = `${environment.API_BASE}`
  private readonly transitionDuration = 5000;
  private autoSlideSubscription!: Subscription;


  isLoading = signal<boolean>(true)
  currentIndex$ = new BehaviorSubject<number>(0);
  currentIndex!: Signal<number>;
  bannerList = signal<Banner[]>([]);
  page = signal<number>(0);
  size = signal<number>(10)

  constructor() {
    this.currentIndex = toSignal(this.currentIndex$, { initialValue: 0 });
  }

  ngOnInit(): void {
    this.initalSetup()
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  public navigateToBanner(url?: string) {
    this.router.navigateByUrl(`${this.API_URL}${url}`);
  }

  public setCurrentIndex(index: number) {
    this.currentIndex$.next(index);
    this.resetAutoSlide();
  }

  private getBannersSubscription(language: string): Observable<BannerRes | null> {
    return this.bannerService.getBanner(this.page(), this.size()).pipe(
      switchMap((res) => {
        if (res?.items) {
          this.bannerList.set(res.items.map((item) => item.banner));
          this.isLoading.set(true);
          const banners$: Observable<any>[] = res.items.map((item) =>
            this.fileService.getFileAsBase64(item.banner.imageUrl).pipe(
              map((imgUrl) => ({
                ...item,
                imgBuffer: this.getSafeImageUrl(imgUrl)
              }))
            )
          );

          return forkJoin(banners$).pipe(
            map((banners) =>
              banners.map((banner) => ({
                ...banner.banner,
                imgBuffer: banner.imgBuffer
              }))
            ),
            tap((banners) => {
              this.bannerService.setBannerList(banners, language);
              this.bannerList.set(banners);
              this.isLoading.set(false);
              this.startAutoSlide();
            }),
            map(() => res),
            finalize(() => this.isLoading.set(false))
          );
        }
        return of(res);
      }),
      catchError((err) => {
        this.isLoading.set(false);
        return EMPTY;
      })
    );
  }

  getSafeImageUrl(base64: string): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustUrl(base64);
  }

  private stopAutoSlide() {
    if (this.autoSlideSubscription) {
      this.autoSlideSubscription.unsubscribe();
    }
  }

  private startAutoSlide() {
    this.autoSlideSubscription = interval(this.transitionDuration)
      .pipe(takeWhile(() => this.bannerList().length > 1))
      .subscribe(() => {
        this.nextSlide();
      });
  }

  private nextSlide() {
    const nextIndex = (this.currentIndex$.value + 1) % this.bannerList().length;
    this.currentIndex$.next(nextIndex);
  }


  private resetAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }

  private initalSetup(): void {
    this.languageService.currentLanguage$
      .pipe(
        distinctUntilChanged(),
        switchMap((currentLanguage) => {
          const cachedBanners = this.bannerService.getCachedBannerList(currentLanguage);
          if (cachedBanners.length) {
            this.bannerList.set(cachedBanners);
            this.isLoading.set(false);
            return EMPTY;
          } else {
            return this.getBannersSubscription(currentLanguage);
          }
        }),
        takeUntilDestroyed(this.destroy$)
      )
      .subscribe();
  }

}
