import { Routes } from '@angular/router';
import { LibraryComponent } from './library.component';

export const LIBRARY_ROUTES: Routes = [
    {
        path: ':anime',
        children: [
            {
                path: 'chapters',
                component: LibraryComponent,
                data: {
                    title: 'Capítulos'
                }
            },
            {
                path: 'ovas',
                component: LibraryComponent,
                data: {
                    title: 'Ovas'
                }
            },
            {
                path: 'movies',
                component: LibraryComponent,
                data: {
                    title: 'Películas'
                }
            }
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '/'
    }
];
