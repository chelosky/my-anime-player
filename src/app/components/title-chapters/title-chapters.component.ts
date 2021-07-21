import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { CHAPTER_GRID_TYPE, CHAPTER_LIST_TYPE } from 'src/app/constants';

@Component({
  selector: 'app-title-chapters',
  templateUrl: './title-chapters.component.html',
  styleUrls: ['./title-chapters.component.css']
})
export class TitleChaptersComponent implements OnInit {

  types: any[] = [
    {
      icon: 'grid_view',
      class: 'md-left',
      value: CHAPTER_GRID_TYPE
    },
    {
      icon: 'list',
      class: 'md-right',
      value: CHAPTER_LIST_TYPE
    }
  ];

  @Input() currentType: number = CHAPTER_GRID_TYPE;
  @Input() title: string;
  @Output() typeListChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
  }

  isCurrent(value: number){
    return value === this.currentType;
  }

  changeType(value: number){
    this.currentType = value;
    this.typeListChange.emit(this.currentType);
  }

}
