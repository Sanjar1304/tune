import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, filter,} from "rxjs";

import { BreadCrumb } from "../../models/breadcrumb.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbsSubject = new BehaviorSubject<BreadCrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();;

  public constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const breadcrumbs = this.buildBreadcrumbs(this.activatedRoute.root);
      this.breadcrumbsSubject.next(breadcrumbs);
    });
  }

  public updateBreadCrumbLabel(label: string): void{
    const breadcrumb = this.breadcrumbsSubject.getValue();
    if(breadcrumb.length > 0){
      breadcrumb[breadcrumb.length - 1].label = label; // Update the last breadcrumb
      this.breadcrumbsSubject.next(breadcrumb); // Emit the updated breadcrumb
    }
  }


  private buildBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: BreadCrumb[] = []): BreadCrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeUrl: string = child.snapshot.url.map(segment => segment.path).join('/');
      if (routeUrl !== '') {
        url += `/${routeUrl}`;
      }

      const breadcrumbLabel = child.snapshot.data['breadcrumb'];
      const isHomeRoute = child.snapshot.data['breadcrumb'] === null && !routeUrl;

      // Check if the current route is not the root (home), add "Home" at the beginning
      if (!isHomeRoute && breadcrumbs.length === 0) {
        breadcrumbs.push({ label: 'Home', url: '/' });
      }

      const hasDynamicId = !!child.snapshot.paramMap.get('id');

      if (breadcrumbLabel !== null) {
        if (hasDynamicId) {
          // Add a placeholder for the dynamic ID route
          breadcrumbs.push({ label: '', url });
        } else if (breadcrumbLabel) {
          // Add static breadcrumbs like 'Catalog'
          breadcrumbs.push({ label: breadcrumbLabel, url });
        }
      }

      // Recursively collect breadcrumbs for child routes
      return this.buildBreadcrumbs(child, url, breadcrumbs);
    }

    return breadcrumbs;
  }
}
