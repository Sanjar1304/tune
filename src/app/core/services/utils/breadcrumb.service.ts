import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, combineLatest, filter, from, map, Observable, of, switchMap,} from "rxjs";

import { BreadCrumb } from "../../models/breadcrumb.model";
import {inject, Injectable} from "@angular/core";
import {TranslocoService} from "@jsverse/transloco";
import {LanguageService} from "./language.service";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {

  private breadcrumbsSubject = new BehaviorSubject<BreadCrumb[]>([]);
  public breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private languageService = inject(LanguageService);
  private translocoService = inject(TranslocoService);


  public constructor() {
    combineLatest([
      this.languageService.currentLanguage$,  // Track language changes
      this.router.events.pipe(filter(event => event instanceof NavigationEnd)) // Track navigation changes
    ]).subscribe(() => {
      this.buildBreadcrumbs(this.activatedRoute.root).subscribe(breadcrumbs => {
        this.breadcrumbsSubject.next(breadcrumbs);
      });
    });
  }

  public updateBreadCrumbLabel(label: string): void{
    const breadcrumb = this.breadcrumbsSubject.getValue();
    if(breadcrumb.length > 0){
      breadcrumb[breadcrumb.length - 1].label = label; // Update the last breadcrumb
      this.breadcrumbsSubject.next(breadcrumb); // Emit the updated breadcrumb
    }
  }


  private buildBreadcrumbs(route: ActivatedRoute, url: string = "", breadcrumbs: BreadCrumb[] = []): Observable<BreadCrumb[]> {
    const children = route.children;

    // If there are no children, we return the current breadcrumbs
    if (children.length === 0) {
      return of(breadcrumbs);
    }

    return from(children).pipe(
      switchMap(child => {
        const routeUrl = child.snapshot.url.map(segment => segment.path).join("/");
        const fullUrl = routeUrl ? `${url} / ${routeUrl}` : url;
        const breadcrumbKey = child.snapshot.data["breadcrumb"];

        // Translate breadcrumb key if available
        const breadcrumbLabel$ = breadcrumbKey
          ? this.translocoService.selectTranslate(breadcrumbKey)
          : of(null);

        return breadcrumbLabel$.pipe(
          map(breadcrumbLabel => {
            if (breadcrumbLabel) {
              breadcrumbs.push({ label: breadcrumbLabel, url: fullUrl });
            }
            return breadcrumbs;
          }),
          switchMap(() => this.buildBreadcrumbs(child, fullUrl, breadcrumbs)) // Recursive call for child routes
        );
      }),
      map(breadcrumbs => {
        // If not on the home page, prepend the Home breadcrumb
        if (breadcrumbs.length > 0 && breadcrumbs[0].url !== '/') {
          const homeLabel = this.translocoService.translate('headerMenu.menuTab.home');
          breadcrumbs.unshift({ label: homeLabel, url: '/' });
        }
        return breadcrumbs;
      })
    );
  }
}
