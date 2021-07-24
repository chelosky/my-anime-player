import { Component, OnInit } from '@angular/core';
import { CHAPTER_GRID_TYPE } from '../../constants/general.constants';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { FavoriteService } from '../../services/favorite.service';
import { VideoPlayerService } from '../../services/video-player.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  title: string = 'Favoritos';
  filterText: string = '';
  filterProps: string[] = [ 'id', 'code', 'name', 'season', 'season_name' ];
  typeList: number = CHAPTER_GRID_TYPE;
  data: ChapterObject[]= [];
  loaded: boolean = false;
  constructor(
    private favoriteService: FavoriteService,
    private videoPlayerService: VideoPlayerService,
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getCurrentType();
    this.getFavorites();
  }

  getFavorites(){
    this.loaded = false;
    this.data = this.favoriteService.getFavorites();
    this.videoPlayerService.setVideoList(this.data);
    console.log(this.data);
    this.loaded = true;
  }
  
  getCurrentType(){
    this.typeList = this.settingsService.getType();
  }

  changeTypeList(event: number){
    this.typeList = event;
  }

  changeFilterText(event: string){
    this.filterText = event;
  }
}
