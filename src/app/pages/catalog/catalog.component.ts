import { BreadcrumbComponent } from "../../core/components/breadcrumb/breadcrumb.component";
import {CatalogCardsComponent} from "./catalog-cards/catalog-cards.component";
import {CatalogSortingComponent} from "./catalog-sorting/catalog-sorting.component";
import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CatalogSortingComponent,
    CatalogCardsComponent,
    BreadcrumbComponent
],
  templateUrl: './catalog.component.html',
  styles: `

  `
})
export class CatalogComponent{}
