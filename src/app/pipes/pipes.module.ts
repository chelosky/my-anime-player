import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterChaptersPipe } from './filter-chapters.pipe';



@NgModule({
  declarations: [
    FilterChaptersPipe
  ],
  exports: [
    FilterChaptersPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
