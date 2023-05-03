import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  headers = new HttpHeaders()
    .set('Content-Type', 'multipart/form-data')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient, public constants: ConstantsService) {}

  upload(file: any): Observable<any> {
    const formData = new FormData();
    formData.append('file', file as Blob);
    return this.http.post(this.constants.gatewayHost+this.constants.imageToObjPath, formData);
  }

  resend(txt: string): Observable<any> {
    return this.http.post(this.constants.gatewayHost+this.constants.textToObjPath, txt);
  }
}
