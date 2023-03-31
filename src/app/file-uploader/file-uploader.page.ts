import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { ReceiptResponse } from '../dto/receipt-response';
import { ReceiptLine } from '../dto/receipt-line';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'file-uploader',
  templateUrl: 'file-uploader.page.html',
  styleUrls: ['file-uploader.page.scss'],
})
export class FileUploaderPage {
  public url?: string;
  public file?: File = undefined;
  public receipt?: ReceiptResponse;
  public progress = false;
  selectedLine?: ReceiptLine = undefined;
  textResponse?: string = '';

  constructor(
    private fileUploadService: FileUploadService,
    public navCtrl: NavController
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
