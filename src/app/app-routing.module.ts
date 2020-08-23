import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'page3',
        loadChildren: () => import('./page3/page3.module').then(m => m.Page3PageModule)
    },
    {
        path: 'resort-detail',
        loadChildren: () => import('./resort-detail/resort-detail.module').then(m => m.ResortDetailPageModule)
    },
    {
        path: 'resort-add',
        loadChildren: () => import('./resort-add/resort-add.module').then(m => m.ResortAddPageModule)
    },
    {
        path: 'resort-edit',
        loadChildren: () => import('./resort-edit/resort-edit.module').then(m => m.ResortEditPageModule)
    },
    {
        path: 'resort',
        loadChildren: () => import('./resort/resort.module').then(m => m.ResortPageModule)
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
