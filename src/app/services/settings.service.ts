import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { VIEW_TYPE_KEY, FAVORITE_KEY, WATCHED_KEY } from '../constants/storage.constants';
import { CHAPTER_GRID_TYPE } from '../constants/general.constants';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private currentType: number;

  constructor(
    private storageService: StorageService
  ) {
    this.initCurrent();
  }

  private initCurrent(){
    this.currentType = this.storageService.retrieve(VIEW_TYPE_KEY);
  }

  setType(value: number): void{
    this.storageService.store(VIEW_TYPE_KEY, value);
    this.initCurrent();
  }

  getType(): number{
    return this.currentType;
  }

  removeAllData(){
    this.storageService.remove(FAVORITE_KEY);
    this.storageService.remove(WATCHED_KEY);
  }

}
