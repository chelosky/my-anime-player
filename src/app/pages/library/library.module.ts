import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { ComponentsModule } from '../../components/components.module';
import { LIBRARY_ROUTES } from './library.routes';
import { LibraryComponent } from './library.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    PipesModule,
    ComponentsModule,
    RouterModule.forChild(LIBRARY_ROUTES)
  ]
})
export class LibraryModule { }
