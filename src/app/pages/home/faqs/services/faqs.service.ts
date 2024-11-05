import {inject, Injectable} from "@angular/core";
import {environment} from "../../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SessionService} from "../../../../core/services/root/sessionService";
import {catchError, map, Observable} from "rxjs";
import {FaqsModel} from "../models/faqs.model";
import {BackendResponseModel} from "../../../../core/models/backend-response.model";


@Injectable({
  providedIn: "root"
})
export class FaqsService {
  private API_URL = `${environment.API_BASE}/api/v1/`;

  private http = inject(HttpClient);
  private sessionService = inject(SessionService);

  public getFaqsData(data: { page: number, size: number, filter: { productId: string, faqProductType: string} }): Observable<FaqsModel | null>{
    return this.http.post<BackendResponseModel<FaqsModel>>(`${this.API_URL}faq/list`, {data}).pipe(
      map(this.sessionService.handleResponse<FaqsModel>),
      catchError(this.sessionService.handleError)
    )
  }
}
