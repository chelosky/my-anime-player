import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../utils/material.module';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { SETTINGS_ROUTES } from './settings.routes';
import { TitleComponent } from './title/title.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SettingsComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ]
})
export class SettingsModule { }
