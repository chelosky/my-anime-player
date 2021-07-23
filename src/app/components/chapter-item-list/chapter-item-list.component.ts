import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';

@Component({
  selector: 'app-chapter-item-list',
  templateUrl: './chapter-item-list.component.html',
  styleUrls: ['./chapter-item-list.component.css']
})
export class ChapterItemListComponent implements OnInit {

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
