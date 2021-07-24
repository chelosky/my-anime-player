import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ANIMES_INFO, CHAPTER_GRID_TYPE } from '../../constants/general.constants';
import { AnimeService } from '../../services/anime.service';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { Subscription } from 'rxjs';
import { VideoPlayerService } from '../../services/video-player.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit, OnDestroy{

  title: string = '';
  filterText: string = '';
  filterProps: string[] = [ 'id', 'code', 'name', 'season', 'season_name' ];
  typeList: number = CHAPTER_GRID_TYPE;
  data: ChapterObject[]= [];
  loaded: boolean = false;

  paramsChangedSub$ = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private animeService: AnimeService,
    private videoPlayerService: VideoPlayerService,
    private settingsService: SettingsService
  ) {
  }


  ngOnInit(): void { 
    this.getCurrentType();
    this.paramsChangedSub$ = this.activatedRoute.params.subscribe((params) => {
      this.getInformation();
    });
  }

  async getInformation(){
    this.loaded = false;
    this.filterText = '';
    // {path: "chapters", data: {…}, component: ƒ}
    let routeConfigPath = this.activatedRoute.snapshot.routeConfig.path;
    // {title: "Capítulos"}
    let routeData: any = this.activatedRoute.snapshot.data;
    // {anime: "dbz"}
    let routeParams: any = this.activatedRoute.snapshot.params;
    this.title = `${routeData.title} ${ANIMES_INFO[routeParams.anime].name}`;
    this.data = await this.animeService.getAnimeData(routeParams.anime, routeConfigPath).toPromise().catch((err) => console.log(err));
    this.videoPlayerService.setVideoList(this.data);
    this.loaded = true;
  }

  changeTypeList(event: number){
    this.typeList = event;
  }

  getCurrentType(){
    this.typeList = this.settingsService.getType();
  }

  changeFilterText(event: string){
    this.filterText = event;
  }

  ngOnDestroy(): void {
    this.paramsChangedSub$.unsubscribe();
  }
}
