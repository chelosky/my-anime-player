import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

/**
 * COMPONENTES
 */
import { PagesComponent } from './pages.component';
import { HOME_ROUTES } from './home/home.routes';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
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