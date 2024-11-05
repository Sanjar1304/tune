import {inject, Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../../../core/services/root/sessionService";

@Injectable({
  providedIn: "root"
})
export class ProsService {
  private API_URL = `${environment.API_BASE}/api/v1/`;

  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getProsCards(){
    return this.http.post(`${this.API_URL}product/loan/list`, {})
  }
}
