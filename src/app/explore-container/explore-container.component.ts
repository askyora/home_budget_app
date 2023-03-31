import { Component, Input } from '@angular/core';
import { AlertMessage } from '../dto/alert-message';
import { ReceiptLine } from '../dto/receipt-line';
import { ReceiptResponse } from '../dto/receipt-response';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  @Input() url?:string;
  constructor(private fileUploadService: FileUploadService) {
  }
  @Input() alertMessage?:AlertMessage={ alertMessage:"Loading ...",showAlert:false,showError:false};

  title = '{Home Wallet}';
  @Input() receiptResponse?: ReceiptResponse;
  selectedLine?: ReceiptLine = undefined;

  showAlertMsg(show:AlertMessage){
    this.alertMessage=show;
  }

  onSelect(line: ReceiptLine): void {
    this.selectedLine = line;
  }
  setResponse(r:ReceiptResponse){
    this.receiptResponse = r;
  }

  setImageUrl(url:string){
    this.url = url;
  }


  onResend() {
    if (this.receiptResponse?.text != null) {
       this.fileUploadService.resend(this.receiptResponse.text).subscribe(res => {
        let r: ReceiptResponse = JSON.parse(JSON.stringify(res));
        this.receiptResponse = r;
        this.selectedLine = undefined;
      });
    }
  }


}
