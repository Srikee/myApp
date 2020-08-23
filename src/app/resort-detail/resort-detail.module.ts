import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResortDetailPageRoutingModule } from './resort-detail-routing.module';

import { ResortDetailPage } from './resort-detail.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResortDetailPageRoutingModule
    ],
    declarations: [ResortDetailPage]
})
export class ResortDetailPageModule { }
