import { Component, Input, OnInit } from '@angular/core';
import { CHAPTER_LIST_TYPE, CHAPTER_GRID_TYPE } from '../../constants';
import { Movie } from '../../models/movie.model';
import { Chapter } from '../../models/chapter.model';
import { Ova } from '../../models/ova.model';

@Component({
  selector: 'app-chapters-container',
  templateUrl: './chapters-container.component.html',
  styleUrls: ['./chapters-container.component.css']
})
export class ChaptersContainerComponent implements OnInit {

  @Input() typeList: number = CHAPTER_LIST_TYPE;
  @Input() data: Movie[] | Chapter [] | Ova [] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getGrid(){
    return CHAPTER_GRID_TYPE;
  }

  getList(){
    return CHAPTER_LIST_TYPE;
  }

}
