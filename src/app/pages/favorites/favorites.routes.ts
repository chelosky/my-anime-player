import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

export const FAVORITES_ROUTES: Routes = [
    {
        path: '',
        component: FavoritesComponent,
        data: {
            title: 'Favoritos'
        }
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
