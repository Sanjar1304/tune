import { NotAuthorizedGuard } from '../core/guards/not-authorized.guard';
import { Routes } from '@angular/router';
import {AvtoCreditComponent} from "./avto-credit/avto-credit.component";
import {AvtoInsuranceComponent} from "./avto-insurance/avto-insurance.component";
import {PaperworkComponent} from "./paperwork/paperwork.component";
import {AdsCreateComponent} from "./ads-create/ads-create.component";

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    loadComponent :() => import('./pages.component').then(m => m.PagesComponent),
    children: [
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'catalog',
        data: { breadcrumb: 'headerMenu.menuTab.catalog' },
        children: [
          {
            path: '',
            data: { breadcrumb: null },
            loadComponent: () => import('./catalog/catalog.component').then(m => m.CatalogComponent),
          },
          {
            path: ':id',
            data: { breadcrumb: 'headerMenu.menuTab.catalog' },
            loadComponent: () => import('./catalog/catalog-cards/card-detail-page/card-detail-page.component').then(m => m.CardDetailPageComponent),
          }
        ]
      },

      {
        path: 'avto-credit',
        component: AvtoCreditComponent,
      },
      {
        path: 'avto-insurance',
        component: AvtoInsuranceComponent,
      },
      {
        path: 'paperwork',
        component: PaperworkComponent,
      },
      {
        path: 'adds-create',
        component: AdsCreateComponent,
        canActivate: [NotAuthorizedGuard],
      },
    ]
  }
];


