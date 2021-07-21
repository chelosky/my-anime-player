import { Routes } from '@angular/router';
import { FavoritesComponent } from './favorites.component';

export const FAVORITES_ROUTES: Routes = [
    {
        path: '',
        component: FavoritesComponent,
        data: {
            title: 'Favorites'
        }
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
