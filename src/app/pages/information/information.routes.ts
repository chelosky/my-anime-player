import { Routes } from '@angular/router';
import { InformationComponent } from './information.component';

export const INFORMATION_ROUTES: Routes = [
    {
        path: '',
        component: InformationComponent,
        data: {
            title: 'Información'
        }
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
