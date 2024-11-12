import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {CarCatalogRes} from "../../../core/constants/carCatalogRes";

@Injectable({
  providedIn: "root"
})
export class CatalogDataService {
  private catalogDataSource = new BehaviorSubject<CarCatalogRes | null>(null);
  catalogData$ = this.catalogDataSource.asObservable();

  // Method to update catalog data
  updateCatalogData(data: CarCatalogRes) {
    this.catalogDataSource.next(data);
  }
}
