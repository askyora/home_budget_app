import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileUploaderPage } from './file-uploader.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab1PageRoutingModule } from './file-uploader-routing.module';
import { CommonViewsModule } from '../common-views/common-views.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    CommonViewsModule,
  ],
  declarations: [FileUploaderPage],
})
export class Tab1PageModule {}
