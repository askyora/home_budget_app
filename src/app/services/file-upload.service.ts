import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  
 public baseImageApiUrl = "https://yora-ms:8080/api/image-to-receipt"
 public baseTxtApiUrl = "https://yora-ms:8080/api/text-to-receipt"

  headers = new HttpHeaders()
  .set("Content-Type", "multipart/form-data")
  .set("Access-Control-Allow-Origin","*");

  constructor(private http:HttpClient) { }

  upload(file:any):Observable<any> {
    const formData = new FormData(); 
    formData.append("file", file as Blob);
    return this.http.post(this.baseImageApiUrl, formData);
  }

  resend(txt:string):Observable<any> {
    return this.http.post(this.baseTxtApiUrl, txt);
  }
}
