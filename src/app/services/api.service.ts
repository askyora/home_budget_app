import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { ReceiptResponse } from '../dto/receipt-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient, public constants: ConstantsService) {}

  saveReceipt(receipt: ReceiptResponse): Observable<HttpResponse<ReceiptResponse>> {
    let r = Object.assign({}, receipt);
    r.text="";
    return this.http.post(
      this.constants.gatewayHost+this.constants.apiUrlPath,
      r,
      {observe: 'response'}
    );
  }
}
