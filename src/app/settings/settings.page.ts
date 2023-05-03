import { Component } from '@angular/core';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
  constructor(public constants: ConstantsService) {
  }
}
