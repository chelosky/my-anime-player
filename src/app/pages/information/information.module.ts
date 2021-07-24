import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from '../../pipes/pipes.module';
import { RouterModule } from '@angular/router';
import { INFORMATION_ROUTES } from './information.routes';
import { MaterialModule } from '../../utils/material.module';
import { InformationComponent } from './information.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionItemComponent } from './accordion-item/accordion-item.component';



@NgModule({
  declarations: [
    InformationComponent,
    AccordionComponent,
    AccordionItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule,
    RouterModule.forChild(INFORMATION_ROUTES)
  ]
})
export class InformationModule { }
