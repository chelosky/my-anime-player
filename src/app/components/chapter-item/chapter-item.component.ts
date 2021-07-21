import { Component, Input, OnInit } from '@angular/core';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';

@Component({
  selector: 'app-chapter-item',
  templateUrl: './chapter-item.component.html',
  styleUrls: ['./chapter-item.component.css']
})
export class ChapterItemComponent implements OnInit {

  @Input() item: ChapterObject;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item.getInformation())
  }

}
