import { NotAuthorizedGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    data: { breadcrumb: null },
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'my-avto',
    data: { breadcrumb: 'My Avto' },
    loadComponent: () => import('./pages/my-auto/my-auto.component').then(m => m.MyAutoComponent)
  },
  {
    path: 'catalog',
    data: { breadcrumb: 'Catalog' },
    children: [
      {
        path:'',
        data: { breadcrumb: null },
        loadComponent: () => import('./pages/catalog/catalog.component').then(m => m.CatalogComponent)
      },
      {
        path: ':id',
        data: { breadcrumb: '' }, 
        loadComponent: () => import('./pages/catalog/catalog-cards/card-detail-page/card-detail-page.component').then(m => m.CardDetailPageComponent)
      }
    ]
  },
  {
    path: 'avto-credit',
    data: { breadcrumb: 'Avto Credit' },
    loadComponent: () => import('./pages/avto-credit/avto-credit.component').then(m => m.AvtoCreditComponent)
  },
  {
    path: 'avto-insurance',
    data: { breadcrumb: 'Car Insurance' },
    loadComponent: () => import('./pages/avto-insurance/avto-insurance.component').then(m => m.AvtoInsuranceComponent)
  },
  {
    path: 'paperwork',
    data: { breadcrumb: 'Paperwork' },
    loadComponent: () => import('./pages/paperwork/paperwork.component').then(m => m.PaperworkComponent)
  },
  {
    path: 'adds-create',
    data: { breadcrumb: 'Create Advertisement' },
    loadComponent: () => import('./pages/ads-create/ads-create.component').then(m => m.AdsCreateComponent),
    canActivate: [NotAuthorizedGuard]
  },

  {
    path: 'auth',
    data: { breadcrumb: null},
    loadComponent: () => import('./pages/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];
