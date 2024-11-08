import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';

import { BreadCrumb } from '../../models/breadcrumb.model';
import { BreadcrumbService } from '../../services/utils/breadcrumb.service';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from "rxjs";

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NgIf, NgFor,
    RouterLink,
    AsyncPipe,
  ],
  templateUrl: './breadcrumb.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: BreadCrumb[] = [];

  public breadcrumbService = inject(BreadcrumbService)

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
