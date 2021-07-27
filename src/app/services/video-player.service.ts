import { Injectable } from '@angular/core';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';

@Injectable({
  providedIn: 'root'
})
export class VideoPlayerService {

  private videoList: ChapterObject[] = [];

  private getCurrentIndex(current: ChapterObject){
    return this.videoList.findIndex((item: ChapterObject) => current.code == item.code && current.anime == item.anime);
  }

  private getNext(current: ChapterObject): ChapterObject{
    const currentIndex: number = this.getCurrentIndex(current);
    if(currentIndex != -1 && currentIndex + 1 < this.videoList.length){
      return this.videoList[currentIndex + 1];
    }
    return null;
  }

  private getPrevious(current: ChapterObject){
    const currentIndex: number = this.getCurrentIndex(current);
    if(currentIndex != -1 && currentIndex - 1 >= 0){
      return this.videoList[currentIndex - 1];
    }
    return null;
  }

  setVideoList(list: ChapterObject[]){
    this.videoList = list;
  }

  getVideoList():ChapterObject[]{
    return this.videoList;
  }

  getNextPrevious(current: ChapterObject){
    return {
      previous: this.getPrevious(current),
      next: this.getNext(current)
    };
  }

  
}
