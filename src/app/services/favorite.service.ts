import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Favorite } from '../models/interfaces/favorite.interface';
import { FAVORITE_KEY, FAVORITE_TYPES } from '../constants/storage.constants';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { DatePipe } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  private favorites: Favorite[];
  private handleFavorite$: Subject<void> = new Subject<void>();

  constructor(
    private storageService: StorageService,
    private datePipe: DatePipe
  ) {
    this.getLocalInformation();
  }

  private getLocalInformation(){
    this.favorites = this.storageService.retrieve(FAVORITE_KEY) || [];
  }

  private getCurrentDate(format: string = 'dd/MM/yyyy, h:mm:ss a'){
    return this.datePipe.transform(new Date(), format);
  }

  private setInformation(){
    this.storageService.store(FAVORITE_KEY, this.favorites);
    this.handleFavorite$.next();
  }

  private isDuplicated(newValue: Favorite): boolean{
    return this.favorites.findIndex((item: Favorite) => item.code == newValue.code && item.anime == newValue.anime) != -1;
  }

  updateFavorites(list: ChapterObject[]){
    this.favorites = list.map((item: ChapterObject) => {return {...item, create_at: this.getCurrentDate(), type: item.getType()}; });
    this.setInformation();
  }

  getFavorites(): ChapterObject[]{
    return this.favorites.map((item: Favorite) => { return FAVORITE_TYPES[item.type].generate(item); });
  }

  getSubject(){
    return this.handleFavorite$;
  }

  getHandle(){
    return this.handleFavorite$.asObservable();
  }

  isFavorite(item: ChapterObject): boolean{
    return this.favorites.findIndex((favorite: Favorite) => favorite.code == item.code && favorite.anime == item.anime) != -1;
  }

  setFavorite(item: ChapterObject): void{
    const newFavorite: Favorite = {...item, create_at: this.getCurrentDate(), type: item.getType()};
    if(this.isDuplicated(newFavorite)) return;
    this.favorites.push(newFavorite);
    this.setInformation();
  }

  removeFavorite(item: ChapterObject): void{
    const currentIndex: number = this.favorites.findIndex((favorite: Favorite) => favorite.code == item.code && favorite.anime == item.anime);
    if(currentIndex == -1) return;
    this.favorites.splice(currentIndex, 1);
    this.setInformation();
  }

  clearFavorites(): void{
    this.favorites = [];
    this.setInformation();
  }
}
