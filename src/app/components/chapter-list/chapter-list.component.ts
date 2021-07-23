import { Component, Input, OnInit } from '@angular/core';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';
import { CHAPTER_LIST_TYPE } from '../../constants/general.constants';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit {

  @Input() data: ChapterObject[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  getType(){
    return CHAPTER_LIST_TYPE;
  }
}
