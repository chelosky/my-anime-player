import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Favorite } from '../models/interfaces/favorite.interface';
import { WatchedChapter } from '../models/interfaces/watched-chapter.interface';
import { WATCHED_KEY, FAVORITE_KEY } from '../constants/storage.constants';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites: Favorite[];

  constructor(
    private storageService: StorageService,
    private datePipe: DatePipe
  ) {
    this.getLocalInformation();
  }

  private getLocalInformation(){
    this.favorites = this.storageService.retrieve(FAVORITE_KEY) || [];
  }

  private getCurrentDate(format: string = 'd/M/yy, h:mm:ss a'){
    return this.datePipe.transform(new Date(), format);
  }

  private setInformation(){
    this.storageService.store(FAVORITE_KEY, this.favorites);
  }

  private isDuplicated(newValue: Favorite): boolean{
    return this.favorites.findIndex((item: Favorite) => item.code == newValue.code && item.anime == newValue.anime) != -1;
  }

  isFavorite(item: ChapterObject): boolean{
    return this.favorites.findIndex((favorite: Favorite) => favorite.code == item.code && favorite.anime == item.anime) != -1;
  }

  setFavorite(item: ChapterObject): void{
    const newFavorite: Favorite = {...item, create_at: this.getCurrentDate()};
    if(this.isDuplicated(newFavorite)) return;
    this.favorites.push(newFavorite);
    this.setInformation();
  }

  removeFavorite(item: ChapterObject): void{
    this.favorites = this.favorites.filter((favorite: Favorite) => favorite.code != item.code && favorite.anime != item.anime);
    this.setInformation();
  }

}
