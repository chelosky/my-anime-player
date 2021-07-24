import { Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';

export const SETTINGS_ROUTES: Routes = [
    {
        path: '',
        component: SettingsComponent,
        data: {
            title: 'Configuraciones'
        }
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }
];
