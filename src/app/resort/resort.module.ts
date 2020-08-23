import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResortPageRoutingModule } from './resort-routing.module';

import { ResortPage } from './resort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResortPageRoutingModule
  ],
  declarations: [ResortPage]
})
export class ResortPageModule {}
