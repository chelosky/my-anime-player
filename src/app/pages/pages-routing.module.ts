import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: 'favorites',
            loadChildren: () => import('./favorites/favorites.module').then((m) => m.FavoritesModule)
          },
          {
            path: 'information',
            loadChildren: () => import('./information/information.module').then((m) => m.InformationModule)
          },
          {
            path: 'library',
            loadChildren: () => import('./library/library.module').then((m) => m.LibraryModule)
          },
          {
            path: 'settings',
            loadChildren: () => import('./settings/settings.module').then((m) => m.SettingsModule)
          },
          {
            path: '',
            loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
          }
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class PagesRoutingModule { }