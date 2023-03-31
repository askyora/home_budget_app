import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'file-uploader',
        loadChildren: () => import('../file-uploader/file-uploader.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'snapshot',
        loadChildren: () => import('../snapshot/snapshot.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/file-uploader',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/file-uploader',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
