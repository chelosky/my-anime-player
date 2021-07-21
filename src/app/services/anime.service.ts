import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import * as CONSTANTS from '../constants';
import { Observable } from 'rxjs';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { Ova } from '../models/ova.model';
import { Movie } from '../models/movie.model';
import { Chapter } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private generateObject: any = {
    chapters: (item: ChapterObject) => {
      return new Chapter(item.id, item.code, item.name, item.url, item.thumbnail, item.season, item.season_name);
    },
    movies: (item: ChapterObject) => {
      return new Movie(item.id, item.code, item.name, item.url, item.thumbnail);
    },
    ovas: (item: ChapterObject) => {
      return new Ova(item.id, item.code, item.name, item.url, item.thumbnail);
    }
  }

  constructor(
    private dataService: DataService
  ) { }

  getAnimeData(anime_data: string, prop: string): Observable<any>{
    return this.dataService.get(`${CONSTANTS.API}${CONSTANTS.ANIMES_INFO[anime_data].endpoint}`)
    .pipe(
      map((resp: any) => {
        const data = CONSTANTS.ANIMES_INFO[anime_data].get(resp);
        const dataProp: any[] = data[prop];
        const dataObject: ChapterObject[] = dataProp.map((item: any) => this.generateObject[prop](item));
        return dataObject;
      })
    )
  }


}
