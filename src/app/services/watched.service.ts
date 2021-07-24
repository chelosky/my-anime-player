import { Injectable } from '@angular/core';
import { WATCHED_KEY } from '../constants/storage.constants';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { WatchedChapter } from '../models/interfaces/watched-chapter.interface';
import { StorageService } from './storage.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchedService {

  watchedChapters: WatchedChapter[];
  private handleWatched$: Subject<void> = new Subject<void>();

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
    this.handleWatched$.next();
  }

  private isDuplicated(newValue: WatchedChapter){
    return this.watchedChapters.findIndex((item: WatchedChapter) => item.code == newValue.code && item.anime == newValue.anime) != -1;
  }

  getHandle(){
    return this.handleWatched$.asObservable();
  }

  isWatched(item: ChapterObject){
    return this.watchedChapters.findIndex((watched: WatchedChapter) => watched.code == item.code && watched.anime == item.anime) != -1;
  }

  setWatched(item: ChapterObject){
    const newWatched: WatchedChapter = { code: item.code, anime: item.anime };
    if(this.isDuplicated(newWatched)) return;
    this.watchedChapters.push(newWatched);
    this.setInformation();
  }

  removeWatched(item: ChapterObject){
    const currentIndex: number = this.watchedChapters.findIndex((watched: WatchedChapter) => watched.code == item.code && watched.anime == item.anime);
    if(currentIndex == -1) return;
    this.watchedChapters.splice(currentIndex, 1);
    this.setInformation();
  }
}
