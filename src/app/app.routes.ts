import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'homepage',
        title : 'Rdc Tech Communities',
        loadComponent : () => import ('./page/home-page/home-page.component')
    },
    {
        path: '',
        redirectTo : 'homepage',
        pathMatch : 'full'
    }
];
