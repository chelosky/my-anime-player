import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { RouterModule } from '@angular/router';
import { FAVORITES_ROUTES } from './favorites.routes';



@NgModule({
  declarations: [
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild(FAVORITES_ROUTES)
  ]
})
export class FavoritesModule { }
