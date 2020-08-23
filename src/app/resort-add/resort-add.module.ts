import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResortAddPageRoutingModule } from './resort-add-routing.module';

import { ResortAddPage } from './resort-add.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ResortAddPageRoutingModule
    ],
    declarations: [ResortAddPage]
})
export class ResortAddPageModule { }
