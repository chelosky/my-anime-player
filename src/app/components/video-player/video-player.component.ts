import { Component, Inject, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogVideoPlayer } from '../../models/interfaces/dialog-video-player';
import { ResponseDownload } from '../../models/interfaces/response-download';
import { VgApiService } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  urlVideo = "";
  api: VgApiService;
  loaded: boolean = false;
  favorite: boolean = false;

  constructor(
    private animeService: AnimeService,
    public dialogRef: MatDialogRef<VideoPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogVideoPlayer
  ) { }

  ngOnInit(): void {
    this.getInformation();
  }

  async getInformation(){
    const response: ResponseDownload =  await this.animeService.generateDirectDownloadLink(this.data.item).toPromise();
    console.log(response);
    this.urlVideo = response.direct_link;
    this.loaded = true;
  }

  onPlayerReady(api: VgApiService) {
    console.log(api);
    this.api = api;
    this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(
        this.playVideo.bind(this)
    );
  }

  playVideo() {
    this.api.play();
  }

  setFavorite(){
    this.favorite = !this.favorite;
  }
}
