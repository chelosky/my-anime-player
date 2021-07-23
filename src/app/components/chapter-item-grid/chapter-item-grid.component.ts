import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';

@Component({
  selector: 'app-chapter-item-grid',
  templateUrl: './chapter-item-grid.component.html',
  styleUrls: ['./chapter-item-grid.component.css']
})
export class ChapterItemGridComponent implements OnInit {

  @Input() item: ChapterObject;
  @Input() favorite: boolean = false;
  @Input() watched: boolean = false;
  @Output() playEvent = new EventEmitter<void>();
  @Output() favoriteEvent = new EventEmitter<boolean>();
  @Output() watchedEvent = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  setFavorite(){
    this.favorite = !this.favorite;
    this.favoriteEvent.emit(this.favorite);
  }

  setWatched(){
    this.watched = !this.watched;
    this.watchedEvent.emit(this.watched);
  }

  play(){
    this.playEvent.emit();
  }

}
