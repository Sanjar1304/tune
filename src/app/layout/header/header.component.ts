import {
  Component,
  OnInit,
  inject,
  input,
  output,
  signal,
  ElementRef,
  HostListener, OnDestroy, Input
} from '@angular/core';
import { CommonModule, NgIf, NgOptimizedImage } from "@angular/common";
import { INavbarMenu, NAVBAR_MENUS } from "../../core/constants/navbar-menus";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import { Router, RouterLink } from "@angular/router";


import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
import { UserService } from '../../core/services/root/user.service';
import {FormsModule, } from "@angular/forms";
import { TranslocoDirective, } from "@jsverse/transloco";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslocoPipe, TranslocoService } from "@jsverse/transloco";
import { LanguageService } from "../../core/services/utils/language.service";
import { Subject, takeUntil } from "rxjs";
import { StorageService } from '../../shared/services/storage.service';
import { Constants, LanguageKeys } from '../../core/constants';
import { AuthService } from '../../auth/services/auth.service';


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
    NgOptimizedImage,
    ReactiveFormsModule,
    TranslocoPipe,
    TranslocoDirective,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  private readonly router = inject(Router);
  private destroy$ = new Subject<void>()
  private userService = inject(UserService);
  private translocoService = inject(TranslocoService);
  private languageService = inject(LanguageService);
  private elementRef: ElementRef = inject(ElementRef);
  private storageService = inject(StorageService)
  public authService = inject(AuthService)

  public isOpen = false;
  public searchText = '';
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

  navbarMenusList  = signal<{ label: string; path: string, id: string }[]>([]);

  public ngOnInit(): void {
    this.navbarMenusList.set(NAVBAR_MENUS);
    this.applyAccessibility();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if ((this.dropdownOpen && !this.elementRef.nativeElement.contains(event.target)) ||
      (this.logoutOpen && !this.elementRef.nativeElement.contains(event.target))) {
      this.dropdownOpen = false;
      this.logoutOpen = false;
    }
  }


  public isActive(path: string): boolean {
    return this.router.url === path;
  }

  public get locales(): LanguageKeys {
    return this.translocoService
      .getAvailableLangs()
      .map(lang => typeof lang === 'string' ? lang : lang.label) as LanguageKeys;
  }

  public get currentLocale(): string {
    return this.translocoService.getActiveLang();
  }

  public localeSelect(locale: typeof Constants.DEFAULT_LANGUAGE): void {
    this.storageService.language = locale;
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
    // if (this.isLoggedIn) {
    //   this.router.navigate(['/adds-create'])
    // } else {
    //   this.router.navigate(['/auth'])
    // }

    this.router.navigate(['/adds-create'])
  }


  public navigateToLoginPage() {
    this.router.navigate(['/auth']);  // Navigate to AuthComponent
  }

  public logoutUser() {
    this.authService.logout()
    this.userService.logout();
    this.router.navigate(['/'])
    this.isLoggedIn = false;
    this.logoutOpen = false
  }


  openSearch(): void {
    if (!this.isOpen) {
      this.isOpen = true; // Open the search field
    }
  }

  closeSearch(event: Event): void {
    event.stopPropagation(); // Prevents triggering openSearch on click
    this.isOpen = false; // Close the search field
    this.searchText = ''; // Clear input field
  }

  clearSearch(): void {
    this.searchText = ''; // Clear only the text
  }

  isWithinScreenSize(): boolean {
    return window.innerWidth >= 1280 && window.innerWidth <= 1440;
  }


  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
