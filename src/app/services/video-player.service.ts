import { Injectable } from '@angular/core';
import { AnimeService } from './anime.service';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  constructor(
    private animeService: AnimeService
  ) { }

  private getCurrentIndex(current: ChapterObject){
    return this.animeService.animeList.findIndex((item: ChapterObject) => current.id == item.id );
  }

  getNextPrevious(current: ChapterObject){
    return {
      previous: this.getPrevious(current),
      next: this.getNext(current)
    };
  }

  getNext(current: ChapterObject): ChapterObject{
    const currentIndex: number = this.getCurrentIndex(current);
    if(currentIndex != -1 && currentIndex < this.animeService.animeList.length){
      return this.animeService.animeList[currentIndex + 1];
    }
    return null;
  }

  getPrevious(current: ChapterObject){
    const currentIndex: number = this.getCurrentIndex(current);
    if(currentIndex != -1 && currentIndex > 0){
      return this.animeService.animeList[currentIndex - 1];
    }
    return null;
  }
}
