import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SnapshotPage } from './snapshot.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './snapshot-routing.module';
import { CommonViewsModule } from '../common-views/common-views.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    CommonViewsModule,
  ],
  declarations: [SnapshotPage],
})
export class Tab2PageModule {}
