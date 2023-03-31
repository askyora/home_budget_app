import { Component} from '@angular/core';
import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { FileUploadService } from '../services/file-upload.service';
import { ReceiptResponse } from '../dto/receipt-response';
import { CommonModule } from '@angular/common';
import { IonicModule, NavController } from '@ionic/angular';
import { ExploreContainerComponentModule } from "../explore-container/explore-container.module";
import { ReceiptLine } from '../dto/receipt-line';
import { PhotoService } from '../services/photo.service';

@Component({
    selector: 'snapshot',
    templateUrl: 'snapshot.page.html',
    styleUrls: ['snapshot.page.scss']
})
export class SnapshotPage {

  public url?: string;
  public receipt?: ReceiptResponse;
  public progress = false;
  public textResponse?:string;
  selectedLine?: ReceiptLine = undefined;

  constructor(
    private fileUploadService: FileUploadService,
    public navCtrl: NavController,public photoService:PhotoService
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
