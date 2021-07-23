import { Injectable } from '@angular/core';
import { WATCHED_KEY } from '../constants/storage.constants';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { WatchedChapter } from '../models/interfaces/watched-chapter.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  watchedChapters: WatchedChapter[];

  constructor(
    private storageService: StorageService
  ) {
    this.getLocalInformation();
  }

  private getLocalInformation(){
    this.watchedChapters = this.storageService.retrieve(WATCHED_KEY) || [];
  }

  private setInformation(){
    this.storageService.store(WATCHED_KEY, this.watchedChapters);
  }

  private isDuplicated(newValue: WatchedChapter){
    return this.watchedChapters.findIndex((item: WatchedChapter) => item.code == newValue.code && item.anime == newValue.anime) != -1;
  }

  isWatched(item: ChapterObject){
    return this.watchedChapters.findIndex((watched: WatchedChapter) => watched.code == item.code && watched.anime == item.anime) != -1;
  }

  setWatched(item: ChapterObject){
    const newWatched: WatchedChapter = { code: item.code, anime: item.anime};
    if(this.isDuplicated(newWatched)) return;
    this.watchedChapters.push(newWatched);
    this.setInformation();
  }

  removeWatched(item: ChapterObject){
    this.watchedChapters = this.watchedChapters.filter((watched: WatchedChapter) => watched.code != item.code && watched.anime != item.anime);
    this.setInformation();
  }
}
