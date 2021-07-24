import { Component, EventEmitter, Input, OnInit , Output} from '@angular/core';
import { CHAPTER_GRID_TYPE, CHAPTER_LIST_TYPE } from 'src/app/constants/general.constants';
import { ButtonGroup } from '../../models/interfaces/button-group.interface';
import { BUTTON_TYPES } from '../../constants/general.constants';

@Component({
  selector: 'app-title-chapters',
  templateUrl: './title-chapters.component.html',
  styleUrls: ['./title-chapters.component.css']
})
export class TitleChaptersComponent implements OnInit {

  types: ButtonGroup[] = BUTTON_TYPES;

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
