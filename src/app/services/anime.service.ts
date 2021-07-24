import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { map } from 'rxjs/operators';
import * as CONSTANTS from '../constants/general.constants';
import { Observable } from 'rxjs';
import { ChapterObject } from '../models/interfaces/chapter-object.interface';
import { Ova } from '../models/ova.model';
import { Movie } from '../models/movie.model';
import { Chapter } from '../models/chapter.model';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  animeList: ChapterObject[] = [];

  private generateObject: any = {
    chapters: (item: ChapterObject, anime: string) => {
      return new Chapter(item.id, item.code, item.name, item.url, item.thumbnail, item.season, item.season_name, anime);
    },
    movies: (item: ChapterObject, anime: string) => {
      return new Movie(item.id, item.code, item.name, item.url, item.thumbnail, anime);
    },
    ovas: (item: ChapterObject, anime: string) => {
      return new Ova(item.id, item.code, item.name, item.url, item.thumbnail, anime);
    }
  }

  constructor(
    private dataService: DataService
  ) { }
  
  /**
   * 
   * @param anime_data 
   * @param prop can be chapters, ovas or movies
   * @returns 
   */
  getAnimeData(anime_data: string, prop: string): Observable<any>{
    return this.dataService.get(`${CONSTANTS.API}${CONSTANTS.ANIMES_INFO[anime_data].endpoint}`)
    .pipe(
      map((resp: any) => {
        const data = CONSTANTS.ANIMES_INFO[anime_data].get(resp);
        const dataProp: any[] = data[prop];
        const dataObject: ChapterObject[] = dataProp.map((item: any) => this.generateObject[prop](item, anime_data));
        this.animeList = dataObject;
        return dataObject;
      })
    )
  }

  /**
   * 
   * All the mp4 are in a mediafire storage
   * so we need the direct link for the videoplayer
   * 
   * From:
   *        https://www.mediafire.com/file/d99179tmttkp6ws/010-P-chan-eres-un-picaro.mp4/file
   * To:
   *        https://download1487.mediafire.com/82j6rjj781cg/d99179tmttkp6ws/010-P-chan-eres-un-picaro.mp4
   * @param data 
   * @returns 
   */
  generateDirectDownloadLink(data: ChapterObject){
    return this.dataService.post(`${CONSTANTS.API}download`,
    {
      url: data.url
    })
    .pipe(
      map(resp => {
        return resp['body'];
      })
    )
  }
}
