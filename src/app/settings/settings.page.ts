import { Component } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  constructor(public fileUploadService: FileUploadService) {
  }
}
