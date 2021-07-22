import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit {

  favorite: boolean = false;

  @Input() item: ChapterObject;
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  play(){
    console.log(this.item);
    const dialogRef = this.dialog.open(VideoPlayerComponent,{
      panelClass: 'my-class',
      data: {
        item: this.item,
        list: []
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  setFavorite(){
    this.favorite = !this.favorite;
  }
}
