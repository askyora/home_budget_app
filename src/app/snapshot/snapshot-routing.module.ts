import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnapshotPage } from './snapshot.page';

const routes: Routes = [
  {
    path: '',
    component: SnapshotPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
