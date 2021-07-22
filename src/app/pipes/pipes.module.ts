import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterChaptersPipe } from './filter-chapters.pipe';
import { CleanChapterNamePipe } from './clean-chapter-name.pipe';



@NgModule({
  declarations: [
    FilterChaptersPipe,
    CleanChapterNamePipe
  ],
  exports: [
    FilterChaptersPipe,
    CleanChapterNamePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
