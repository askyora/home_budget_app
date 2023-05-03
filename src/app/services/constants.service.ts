import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  public gatewayHost: string;
  public imageToObjPath: string;
  public textToObjPath: string;
  public apiUrlPath: string;

  constructor() {
    this.gatewayHost = 'http://yora-ms';
    this.imageToObjPath = '/ocr-service/image-to-receipt';
    this.textToObjPath = '/ocr-service/text-to-receipt';
    this.apiUrlPath = '/receipt-service/receipt';
  }
}
