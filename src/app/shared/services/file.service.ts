import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FileResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private API_URL = `${environment.API_BASE}`;
  private http = inject(HttpClient);

  constructor() { }

  getImage(fileId: string): Observable<string> {
    return this.http.get<FileResponse>(`${this.API_URL}/file/download/static${fileId}`).pipe(
      map((response) => {
        const base64Data = response?.result?.data?.file
        if (!base64Data) {
          throw new Error('File data not found in the response');
        }

        return `data:image/svg+xml;base64,${base64Data}`;
      })
    )
  }

  getFile(fileId: string): Observable<any> {
    return this.http.get(this.API_URL + '/file/download/static/' + fileId, {
      responseType: 'blob',
    })
  }

}
