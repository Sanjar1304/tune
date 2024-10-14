import {ChangeDetectorRef, Component, OnInit, inject, input, output, signal} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {INavbarMenu, NAVBAR_MENUS} from "../../core/constants/navbar-menus";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {Router, RouterLink} from "@angular/router";
import {TranslocoPipe, TranslocoService} from "@jsverse/transloco";

import {LocalStorageService} from "../../core/services/utils/localStorage.service";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from '@angular/material/menu';
import { UiSvgIconComponent } from "../../core/components/ui-svg-icon/ui-svg-icon.component";
import { UserService } from '../../core/services/root/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    CommonModule,
    TranslocoPipe,
    RouterLink,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    NgIf,
    UiSvgIconComponent
],
  templateUrl: './header.component.html',
  styles: `
    :host {

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

      ::ng-deep {
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
export class HeaderComponent implements  OnInit {
  public bnwMode = false;
  public highlightMode = false;
  public dropdownOpen = false;
  public burgerMenuOpen = false;
  public isLoggedIn = false;
  public burgerMenuOpened = input<boolean>(false);
  public closeTrigger = output<boolean>();
  public readonly panelOpenState = signal(false);


  private readonly translocoService = inject(TranslocoService);
  private readonly localStorage = inject(LocalStorageService);
  private readonly router = inject(Router);
  private readonly cd = inject(ChangeDetectorRef);
  private userService = inject(UserService);

  public ngOnInit(): void {
    this.applyAccessibility();
    const savedLocale = this.localStorage.getItem('locale');
    if (savedLocale) {
      this.translocoService.setActiveLang(savedLocale);
    }

    this.userService.userLoginData$.subscribe((res) => {
      this.isLoggedIn = !!res;
    })
  }


  public get navbarMenus(): INavbarMenu[] {
    return NAVBAR_MENUS;
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
    this.translocoService.setActiveLang(locale);
    this.localStorage.setItem('locale', locale);
    this.dropdownOpen = false;
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

  public applyAccessibility(): void {}

  public linkPress(): void {
    this.closeTrigger.emit(!this.burgerMenuOpened())
  }

  public burgerClick(): void {
    this.closeTrigger.emit(!this.burgerMenuOpened())
  }

  public navigateToMain(){
    this.router.navigate(['/']);
  }

  public navigateToAdsCreatePage(){
    if(this.isLoggedIn){
      this.router.navigate(['/adds-create'])
    } else {
      this.router.navigate(['/auth'])
    }
  }


  public navigateToLoginPage() {
    this.router.navigate(['/auth']);  // Navigate to AuthComponent
  }
}
