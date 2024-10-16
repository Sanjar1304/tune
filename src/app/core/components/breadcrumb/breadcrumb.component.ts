import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BreadCrumb } from '../../models/breadcrumb.model';
import { BreadcrumbService } from '../../services/utils/breadcrumb.service';
import { RouterLink } from '@angular/router';

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

  constructor(public breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe((breadcrumbs) => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
