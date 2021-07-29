import { Component, ElementRef, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVideoPlayer } from '../../models/interfaces/dialog-video-player';
import { ResponseDownload } from '../../models/interfaces/response-download.interface';
import { VgApiService } from '@videogular/ngx-videogular/core';
import { FavoriteService } from '../../services/favorite.service';
import { WatchedService } from '../../services/watched.service';
import { VideoPlayerService } from '../../services/video-player.service';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { Subscription } from 'rxjs';

interface VideoElement extends HTMLVideoElement{
  requestPictureInPicture(): any;
}

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit, OnDestroy {

  urlVideo = "";
  api: VgApiService;

  loaded: boolean = false;
  favorite: boolean = false;
  
  next: ChapterObject;
  previous: ChapterObject;

  playSub$: Subscription;

  @ViewChild("media") videoElement: ElementRef;
  video: VideoElement;
  pipModeOn: boolean = false;
  wasInPipMode: boolean = false;

  constructor(
    private animeService: AnimeService,
    public dialogRef: MatDialogRef<VideoPlayerComponent>,
    private favoriteService: FavoriteService,
    private watchedService: WatchedService,
    private videoPlayerService: VideoPlayerService,
    @Inject(MAT_DIALOG_DATA) public data: DialogVideoPlayer
  ) { }

  ngOnInit(): void {
    this.getInformation();
  }

  async getInformation(){
    this.exitPictureInPicture();
    this.video = null;
    this.loaded = false;
    this.getCurrentState();
    this.getNextPreviousData();
    const response: ResponseDownload =  await this.animeService.generateDirectDownloadLink(this.data.item).toPromise();
    this.urlVideo = response.direct_link;
    this.loaded = true;
  }

  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.playSub$ = this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
      this.playVideo.bind(this)
    );
  }

  playVideo() {
    if(this.api){
      this.api.play();
      this.watchedService.setWatched(this.data.item);
      this.video = this.videoElement.nativeElement;
      this.video.addEventListener("leavepictureinpicture", () => {
        this.pipModeOn = false;
      });
      this.video.addEventListener("ended", () => { 
        if(this.next){
          this.wasInPipMode = this.pipModeOn;
          this.goNext();
        }
      });
    }
  }

  handlePip(){
    if(this.pipModeOn){
      this.exitPictureInPicture();
    }else{
      this.pictureInPicture();
    }
  }

  async pictureInPicture(){
    if(this.video && !this.pipModeOn){
      await this.video.requestPictureInPicture();
      this.pipModeOn = true;
    }
  }

  async exitPictureInPicture(){
    if(this.video && this.pipModeOn){
      (document as any).exitPictureInPicture();
      this.pipModeOn = false;
    }
  }

  getCurrentState(){
    this.favorite = this.favoriteService.isFavorite(this.data.item);
  }

  handleFavorite(){
    this.favorite = !this.favorite;
    if(this.favorite){
      this.favoriteService.setFavorite(this.data.item);
    }else{
      this.favoriteService.removeFavorite(this.data.item);
    }
  }

  getNextPreviousData(){
    const {previous, next} = this.videoPlayerService.getNextPrevious(this.data.item);
    this.previous = previous;
    this.next = next;
    console.log(this.previous);
    console.log(this.next);
  }

  goNext(){
    if(this.next){
      console.log('NEXT');
      this.data.item = this.next;
      this.getInformation();
    }
  }
  
  goPrevious(){
    if(this.previous){
      console.log('PREVIOUS');
      this.data.item = this.previous;
      this.getInformation();
    }
  }

  ngOnDestroy(): void {
    if(this.playSub$) this.playSub$.unsubscribe();
    this.exitPictureInPicture();
  }
}
