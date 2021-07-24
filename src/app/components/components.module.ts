import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
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


import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { ChapterItemListComponent } from './chapter-item-list/chapter-item-list.component';
import { ChapterItemGridComponent } from './chapter-item-grid/chapter-item-grid.component';
import { RibbonCornerComponent } from './ribbon-corner/ribbon-corner.component';
import { SwitchComponent } from './switch/switch.component';
import { ButtonGroupComponent } from './button-group/button-group.component';

@NgModule({
  declarations: [
    LoadingComponent,
    TitleChaptersComponent,
    ChapterListComponent,
    ChapterItemComponent,
    ChapterGridComponent,
    ChaptersContainerComponent,
    SearchComponent,
    VideoPlayerComponent,
    ChapterItemListComponent,
    ChapterItemGridComponent,
    RibbonCornerComponent,
    SwitchComponent,
    ButtonGroupComponent
  ],
  exports: [
    LoadingComponent,
    TitleChaptersComponent,
    ChaptersContainerComponent,
    SearchComponent,
    ButtonGroupComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  entryComponents: [
    VideoPlayerComponent
  ],
  providers: [
    DatePipe
  ]
})
export class ComponentsModule { }
