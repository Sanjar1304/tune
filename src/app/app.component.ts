import { AsyncPipe, NgIf } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

import {FooterComponent} from "./layout/footer/footer.component";
import {HeaderComponent} from "./layout/header/header.component";
import { SpinnerComponent } from "./core/components/spinner/spinner.component";
import { UtilsService } from './core/services/utils/utils.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    NgIf,
    AsyncPipe,
    SpinnerComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  isAuth: boolean = false;

  private destroy$ = inject(DestroyRef);
  private router = inject(Router);
  public utilService = inject(UtilsService)

  public ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isAuth = event.url === '/auth';
    })
  }

}
