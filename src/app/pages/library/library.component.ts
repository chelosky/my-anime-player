import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANIMES_INFO, CHAPTER_GRID_TYPE } from '../../constants';
import { AnimeService } from '../../services/anime.service';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { Chapter } from '../../models/chapter.model';
import { Ova } from '../../models/ova.model';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  title: string = '';
  typeList: number = CHAPTER_GRID_TYPE;
  data: ChapterObject[]= [];
  loaded: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService
  ) {
  }

  ngOnInit(): void {    
    this.getInformation();
  }

  async getInformation(){
    // {path: "chapters", data: {…}, component: ƒ}
    let routeConfigPath = this.activatedRoute.snapshot.routeConfig.path;
    // {title: "Capítulos"}
    let routeData: any = this.activatedRoute.snapshot.data;
    // {anime: "dbz"}
    let routeParams: any = this.activatedRoute.snapshot.params;
    this.title = `${routeData.title} ${ANIMES_INFO[routeParams.anime].name}`;
    this.data = await this.animeService.getAnimeData(routeParams.anime, routeConfigPath).toPromise().catch((err) => console.log(err));
    this.loaded = true;
    console.log(this.data);
  }

  changeTypeList(event: number){
    this.typeList = event;
  }

}
