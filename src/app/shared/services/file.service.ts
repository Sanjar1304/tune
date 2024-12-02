import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { FileResponse } from './models';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private http = inject(HttpClient);

  constructor() { }

  getFileAsBase64(url: string): Observable<string> {
    return this.http.post<FileResponse>(url, '').pipe(
      map((response) => {
        const fileData = response?.result?.data?.file;
        if (!fileData) {
          throw new Error('File data not found in the response');
        }

        return `data:${response.result.data.contentType};base64,${fileData}`;
      })
    );
  }

}
