import { Component} from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { ReceiptResponse } from '../dto/receipt-response';
import { NavController } from '@ionic/angular';
import { ReceiptLine } from '../dto/receipt-line';
import { PhotoService } from '../services/photo.service';
import { ProblemDetail } from '../dto/error/problem-detail';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'snapshot',
    templateUrl: 'snapshot.page.html',
    styleUrls: ['snapshot.page.scss']
})
export class SnapshotPage {
  public msg?: ProblemDetail;
  public url?: string;
  public receipt?: ReceiptResponse;
  public progress = false;
  public textResponse?:string;
  selectedLine?: ReceiptLine = undefined;

  constructor(
    private fileUploadService: FileUploadService,
    public navCtrl: NavController,public photoService:PhotoService, public api: ApiService
  ) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onSelect(line: ReceiptLine): void {
    this.selectedLine = line;
  }
  
  setImageUrl(url: string) {
    this.url = url;
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
  
  onResend() {
    if (this.textResponse != undefined) {
      this.progress = true;
      this.fileUploadService.resend(this.textResponse).subscribe((res) => {
        this.receipt = undefined;
        let r: ReceiptResponse = JSON.parse(JSON.stringify(res));
        this.receipt = r;
        this.textResponse = r.text;
        if(this.photoService.photo!=undefined)
        this.url=this.photoService.photo.webviewPath;
        this.progress = false;
        this.selectedLine = undefined;
      });
    }
  }

  

  public ngOnInit(): void {
   
  }

  uploadCaptured() {
    if (this.photoService.photo != undefined && this.photoService.photo.webviewPath != undefined) {
      this.progress = true;

      let arr = this.photoService.photo.data.split(",");
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      let capturedImage: File = new File([u8arr], "file://temp.jpeg");

        this.fileUploadService.upload(capturedImage).subscribe(
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
}
