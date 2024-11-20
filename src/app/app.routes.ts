import { NotAuthorizedGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";

export const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: 'headerMenu.menuTab.myAvto' },
    component: HomeComponent,
  },
  {
    path: 'catalog',
    data: { breadcrumb: 'headerMenu.menuTab.catalog' },
    children: [
      {
        path: '',
        data: { breadcrumb: null },
        loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent),
      },
      {
        path: ':id',
        data: { breadcrumb: 'headerMenu.menuTab.catalog' },
        loadComponent: () => import('./pages/catalog/catalog-cards/card-detail-page/card-detail-page.component').then(m => m.CardDetailPageComponent),
      }
    ]
  },
  {
    path: 'avto-credit',
    data: { breadcrumb: 'headerMenu.menuTab.carCredit' },
    loadComponent: () => import('./pages/avto-credit/avto-credit.component').then(m => m.AvtoCreditComponent),
  },
  {
    path: 'avto-insurance',
    data: { breadcrumb: 'headerMenu.menuTab.carInsurance' },
    loadComponent: () => import('./pages/avto-insurance/avto-insurance.component').then(m => m.AvtoInsuranceComponent),
  },
  {
    path: 'paperwork',
    data: { breadcrumb: 'headerMenu.menuTab.applyDocs' },
    loadComponent: () => import('./pages/paperwork/paperwork.component').then(m => m.PaperworkComponent),
  },
  {
    path: 'adds-create',
    data: { breadcrumb: 'headerMenu.menuTab.addsCreate' },
    loadComponent: () => import('./pages/ads-create/ads-create.component').then(m => m.AdsCreateComponent),
    canActivate: [NotAuthorizedGuard],
  },
  {
    path: 'auth',
    data: { breadcrumb: null },
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
