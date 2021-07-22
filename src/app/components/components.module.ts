import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../utils/material.module';
import { LoadingComponent } from './loading/loading.component';
import { TitleChaptersComponent } from './title-chapters/title-chapters.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterItemComponent } from './chapter-item/chapter-item.component';
import { ChapterGridComponent } from './chapter-grid/chapter-grid.component';
import { ChaptersContainerComponent } from './chapters-container/chapters-container.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    LoadingComponent,
    TitleChaptersComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterGridComponent,
    ChaptersContainerComponent,
    SearchComponent
  ],
  exports: [
    LoadingComponent,
    TitleChaptersComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterGridComponent,
    ChaptersContainerComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
