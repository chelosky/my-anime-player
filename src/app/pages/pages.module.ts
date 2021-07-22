import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../utils/material.module';
import { IconSvgModule } from '../utils/svg-icon.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { InformationComponent } from './information/information.component';
import { LibraryComponent } from './library/library.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    PagesComponent,
    FavoritesComponent,
    InformationComponent,
    LibraryComponent, 
  ],
  exports: [
    PagesComponent,
    FavoritesComponent,
    InformationComponent,
    LibraryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    MaterialModule,
    IconSvgModule,
    PipesModule
  ]
})
export class PagesModule { }
