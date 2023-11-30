import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'homepage',
        title : 'Rdc Tech Communities',
        loadComponent : () => import ('./page/home-page/home-page.component')
    },
    {
        path: 'detailcommunity/:id',
        title: 'Detail community',
        loadComponent : () => import ('./page/detail-community/detail-community.component')
    },
    {
        path: '',
        redirectTo : 'homepage',
        pathMatch : 'full'
    }
];
