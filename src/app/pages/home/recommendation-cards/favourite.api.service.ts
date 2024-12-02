import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendResponseModel } from '../../../core/models/backend-response.model';
import { Data } from './models/recommendation.model';
import { ENDPOINTS } from '../../../core/constants';

@Injectable()

export class FavouriteApiService {
  constructor(private http: HttpClient) {
  }

  addProductToFavourite(productId: string): Observable<BackendResponseModel<Data>> {
    return this.http.post<BackendResponseModel<Data>>(ENDPOINTS.FAVOURITE.ADD, { productId })
  }

  removeProductFromFavourite(productId: string): Observable<BackendResponseModel<Data>> {
    return this.http.post<BackendResponseModel<Data>>(`${ENDPOINTS.FAVOURITE.REMOVE}`, { productId })
  }

}

