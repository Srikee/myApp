import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResortEditPageRoutingModule } from './resort-edit-routing.module';

import { ResortEditPage } from './resort-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResortEditPageRoutingModule
  ],
  declarations: [ResortEditPage]
})
export class ResortEditPageModule {}
