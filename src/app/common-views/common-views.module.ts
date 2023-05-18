import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonToolboxComponent } from '../common-toolbox/common-toolbox.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [CommonToolboxComponent],
  exports: [CommonToolboxComponent],
})
export class CommonViewsModule {}
