import {
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
  input,
  output,
  signal,
  ElementRef,
  HostListener, DestroyRef, OnDestroy
} from '@angular/core';
import { CommonModule, NgIf, NgOptimizedImage } from "@angular/common";
import { INavbarMenu, NAVBAR_MENUS } from "../../core/constants/navbar-menus";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import { Router, RouterLink, RouterLinkActive } from "@angular/router";


import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { UiSvgIconComponent } from "../../core/components/ui-svg-icon/ui-svg-icon.component";
import { UserDataDto } from '../../core/models/user.model';
import { UserService } from '../../core/services/root/user.service';
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslocoDirective, TranslocoPipe, TranslocoService } from "@jsverse/transloco";
import { LocalStorageService } from "../../core/services/utils/storage.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LanguageService } from "../../core/services/utils/language.service";
import { delay, Subject, takeUntil } from "rxjs";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    RouterLink,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgIf,
    UiSvgIconComponent,
    NgOptimizedImage,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    TranslocoPipe,
    RouterLinkActive,
    TranslocoDirective
  ],
  templateUrl: './header.component.html',
  styles: `
    :host {
      .nav-item a {
        text-decoration: none;
        padding: 3px;
        color: black;
        position: relative;
      }

      .nav-item a::after {
       position: absolute;
       content: '';
       height: 2px;
       left: 0;
       bottom: 0;
       width: 0;
       background: #27C5D0;
       transition: width .5s ease-in-out;
      }

      .nav-item a:hover::after {
        width: 100%;
      }

      .custom-size {
        max-width: none;
        width: auto;
      }

      .header-shadow {
        box-shadow: 0 0 10px 0 rgba(255, 85, 61, 0.15);
      }

      .bottom-header-shadow {
        box-shadow: 0 0 10px 0 rgba(255, 85, 61, 0.15);
      }

      .lang-shadow {
        box-shadow: 0 0 15px 0 rgba(255, 85, 61, 0.20);
      }

      ul.custom-bullets {
        list-style: none;
      }

      .lang_animation {
        transition: .3s ease-in-out;
      }



      ::ng-deep {
        .cdk-overlay-connected-position-bounding-box{
          top: 55px !important;
        }

        .mat-expansion-panel {
          display: flex !important;
          flex-direction: column !important;
          box-shadow: none !important;
          background: #FFF !important;
          border-radius: 0 !important;
          padding: 0 !important;
        }

        .mat-expansion-panel-header {
          padding: 0 5px 0 0;
          height: auto;
        }

        .mat-expansion-panel-body {
          padding: 0;
        }

        .mat-expansion-indicator svg {
          width: 34px !important;
          height: 34px !important;
          fill: #262626 !important;
        }

        .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
          background: #fff !important;
        }
      }
    }
  `
})
export class HeaderComponent implements OnInit, OnDestroy {


  public bnwMode = false;
  public dropdownOpen = false;
  public highlightMode = false;
  public burgerMenuOpen = false;
  public logoutOpen = false;
  public isLoggedIn = false;
  public searchPlaceholder = '';
  public burgerMenuOpened = input<boolean>(false);
  public closeTrigger = output<boolean>();
  public readonly panelOpenState = signal(false);
  private isLanguageChanging = false;

  private readonly router = inject(Router);
  private destroy$ = new Subject<void>();
  private readonly cdr = inject(ChangeDetectorRef);
  private userService = inject(UserService);
  private translocoService = inject(TranslocoService);
  private storageService = inject(LocalStorageService);
  private languageService = inject(LanguageService);
  private elementRef: ElementRef = inject(ElementRef);


  public ngOnInit(): void {
    this.applyAccessibility();

    this.userService.userLoginData$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.isLoggedIn = !!res;
      })
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if ((this.dropdownOpen && !this.elementRef.nativeElement.contains(event.target)) ||
      (this.logoutOpen && !this.elementRef.nativeElement.contains(event.target))) {
      this.dropdownOpen = false;
      this.logoutOpen = false;
    }
  }

  public get navbarMenus(): INavbarMenu[] {
    return NAVBAR_MENUS;
  }

  public isActive(path: string): boolean {
    return this.router.url === path;
  }

  public get locales(): string[] {
    return this.translocoService
      .getAvailableLangs()
      .map(lang => typeof lang === 'string' ? lang : lang.label);
  }

  public get currentLocale(): string {
    return this.translocoService.getActiveLang();
  }

  public localeSelect(locale: string): void {
    this.dropdownOpen = false;
    if (this.isLanguageChanging) {
      return;
    }

    this.isLanguageChanging = true;
    this.translocoService.setActiveLang(locale);
    this.languageService.setLanguage(locale);
    this.translocoService.load(locale)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.isLanguageChanging = false;
        },
        error: () => {
          this.isLanguageChanging = false;
        }
      });
  }

  public toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  public isScreenSmall(): boolean {
    const screenWidth = window.innerWidth;
    return screenWidth >= 375 && screenWidth <= 767;
  }

  public eyeMenuClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  public bnwChange(event: boolean): void {
    this.bnwMode = event;
  }

  public reset(): void {
    this.applyAccessibility();
  }

  public toggleBurgerMenu(): void {
    this.burgerMenuOpen = !this.burgerMenuOpen;
  }

  public toggleUserMenu(): void {
    this.logoutOpen = !this.logoutOpen
  }

  public applyAccessibility(): void { }

  public linkPress(): void {
    this.closeTrigger.emit(!this.burgerMenuOpened())
  }

  public burgerClick(): void {
    this.closeTrigger.emit(!this.burgerMenuOpened())
  }

  public navigateToMain() {
    this.router.navigate(['/']);
  }

  public navigateToAdsCreatePage() {
    if (this.isLoggedIn) {
      this.router.navigate(['/adds-create'])
    } else {
      this.router.navigate(['/auth'])
    }
  }


  public navigateToLoginPage() {
    this.router.navigate(['/auth']);  // Navigate to AuthComponent
  }

  public logoutUser() {
    this.userService.logout();
    this.router.navigate(['/'])
    this.isLoggedIn = false;
    this.logoutOpen = false
  }


  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
