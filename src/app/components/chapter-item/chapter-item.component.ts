import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { CHAPTER_GRID_TYPE, CHAPTER_LIST_TYPE } from '../../constants/general.constants';
import { WatchedService } from '../../services/watched.service';
import { FavoriteService } from '../../services/favorite.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit, OnDestroy{

  favorite: boolean;
  watched: boolean;

  subFavorite$: Subscription;
  subWatched$: Subscription;

  @Input() item: ChapterObject;
  @Input() type: number = CHAPTER_GRID_TYPE;
  constructor(
    private dialog: MatDialog,
    private favoriteService: FavoriteService,
    private watchedService: WatchedService
  ) { }

  ngOnInit(): void {
    this.subFavorite$ = this.favoriteService.getHandle().subscribe((res) => this.getCurrentState());
    this.subWatched$ = this.watchedService.getHandle().subscribe((res) => this.getCurrentState());
    this.getCurrentState();
  }

  getCurrentState(){
    this.favorite = this.favoriteService.isFavorite(this.item);
    this.watched = this.watchedService.isWatched(this.item);
  }

  play(){
    const dialogRef = this.dialog.open(VideoPlayerComponent,{
      panelClass: 'my-class',
      data: {
        item: this.item,
        favorite: this.favorite
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getCurrentState();
    });
  }

  handleFavorite(favorite: boolean){
    if(favorite){
      this.favoriteService.setFavorite(this.item);
    }else{
      this.favoriteService.removeFavorite(this.item);
    }
    this.getCurrentState();
  }

  handleWatched(watched: boolean){
    if(watched){
      this.watchedService.setWatched(this.item);
    }else{
      this.watchedService.removeWatched(this.item);
    }
    this.getCurrentState();
  }

  getGrid(){
    return CHAPTER_GRID_TYPE;
  }

  getList(){
    return CHAPTER_LIST_TYPE;
  }

  ngOnDestroy(): void {
    if(this.subFavorite$) this.subFavorite$.unsubscribe();
    if(this.subWatched$) this.subWatched$.unsubscribe();
  }

}
