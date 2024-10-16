import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UtilsService {
  menuState$ = new BehaviorSubject<string>('main');
  spinnerState$ = new BehaviorSubject<boolean>(false);
}
