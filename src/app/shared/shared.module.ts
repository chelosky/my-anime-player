import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../utils/material.module';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    MenuListItemComponent,
    SidebarComponent
  ],
  exports: [
    MenuListItemComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
