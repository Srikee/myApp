import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResortEditPage } from './resort-edit.page';

const routes: Routes = [
    {
        path: '',
        component: ResortEditPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ResortEditPageRoutingModule { }
