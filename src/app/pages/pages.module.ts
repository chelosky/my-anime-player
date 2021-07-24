import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../utils/material.module';
import { IconSvgModule } from '../utils/svg-icon.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ComponentsModule,
    MaterialModule,
    IconSvgModule,
  ]
})
export class PagesModule { }
