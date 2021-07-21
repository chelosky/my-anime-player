import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

/**
 * COMPONENTES
 */
import { PagesComponent } from './pages.component';
import { HOME_ROUTES } from './home/home.routes';
import { INFORMATION_ROUTES } from './information/information.routes';
import { FAVORITES_ROUTES } from './favorites/favorites.routes';
import { LIBRARY_ROUTES } from './library/library.routes';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          {
            path: 'favorites',
            children: FAVORITES_ROUTES
          },
          {
            path: 'information',
            children: INFORMATION_ROUTES
          },
          {
            path: 'library',
            children: LIBRARY_ROUTES
          },
          {
            path: '',
            children: HOME_ROUTES
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