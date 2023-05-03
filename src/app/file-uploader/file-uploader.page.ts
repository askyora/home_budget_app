import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { ReceiptResponse } from '../dto/receipt-response';
import { ReceiptLine } from '../dto/receipt-line';
import { NavController } from '@ionic/angular';
import { ProblemDetail } from '../dto/error/problem-detail';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'file-uploader',
  templateUrl: 'file-uploader.page.html',
  styleUrls: ['file-uploader.page.scss'],
})
export class FileUploaderPage {
  public msg?: ProblemDetail;
  public url?: string;
  public file?: File = undefined;
  public receipt?: ReceiptResponse;
  public progress = false;
  selectedLine?: ReceiptLine = undefined;
  textResponse?: string = '';

  constructor(
    private fileUploadService: FileUploadService,
    public navCtrl: NavController,public api: ApiService
  ) {}

  onSelect(line: ReceiptLine): void {
    this.selectedLine = line;
  }
  setResponse(r: ReceiptResponse) {
    this.receipt = r;
  }
  setImageUrl(url: string) {
    this.url = url;
  }

  onResend() {
    if (this.textResponse != undefined) {
      this.progress = true;
      this.fileUploadService.resend(this.textResponse).subscribe((res) => {
        this.receipt = undefined;
        let r: ReceiptResponse = JSON.parse(JSON.stringify(res));
        this.receipt = r;
        this.textResponse = r.text;
        this.progress = false;
        this.selectedLine = undefined;
      });
    }
  }

  clear() {
    this.msg = undefined;
  }

  save() {
    if (this.receipt != null || this.receipt != undefined) {
      this.progress = true;
      this.msg = undefined;
      this.api.saveReceipt(this.receipt).subscribe(
        (res) => {
          if (res.status == 201) {
            let r = res.body;
            this.msg = {
              message: 'Receipt successfully saved.',
              title: 'Save Action',
              success: 'true',
            } as ProblemDetail;
          }
          this.progress = false;
        },
        (err) => {
          this.msg = JSON.parse(JSON.stringify(err));
          this.progress = false;
        }
      );
    }
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.url = event.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  onUpload() {
    this.progress = true;
    this.fileUploadService.upload(this.file).subscribe(
      (res) => {
        let r: ReceiptResponse = JSON.parse(JSON.stringify(res));
        this.receipt = r;
        this.textResponse = r.text;
        this.progress = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
