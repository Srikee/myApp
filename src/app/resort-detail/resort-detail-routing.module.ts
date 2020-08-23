import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResortDetailPage } from './resort-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ResortDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResortDetailPageRoutingModule {}
