import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendResponseModel } from '../../../core/models/backend-response.model';
import { Data } from './models/recommendation.model';
import { API_URL } from '../../../core/constants';

@Injectable()

export class FavouriteApiService {
  constructor(private http: HttpClient) {

  }


  addProductToFavourite(productId: string): Observable<BackendResponseModel<Data>> {
    return this.http.post<BackendResponseModel<Data>>(`${API_URL}favourite/add`, { productId })
  }

  removeProductFromFavourite(productId: string): Observable<BackendResponseModel<Data>> {
    return this.http.delete<BackendResponseModel<Data>>(`${API_URL}favourite/${productId}`)
  }

}

