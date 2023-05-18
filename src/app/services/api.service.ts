import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { ReceiptResponse } from '../dto/receipt-response';
import { Observable } from 'rxjs';
import { ReceiptLine } from '../dto/receipt-line';
import { SearchReceiptLine } from '../dto/search-receipt-line';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(public http: HttpClient, public constants: ConstantsService) {}

  saveReceipt(
    receipt: ReceiptResponse
  ): Observable<HttpResponse<ReceiptResponse>> {
    let r = Object.assign({}, receipt);
    r.text = '';
    return this.http.post(
      this.constants.gatewayHost + this.constants.apiUrlPath,
      r,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }),
        observe: 'response',
      }
    );
  }

  getReceiptLines(
    searchDto: SearchReceiptLine
  ): Observable<HttpResponse<ReceiptLine[]>> {
    let url =
      this.constants.gatewayHost + this.constants.apiUrlPath + '/search';
    return this.http.post<ReceiptLine[]>(url, JSON.stringify(searchDto), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }),
      observe: 'response',
    });
  }
}
