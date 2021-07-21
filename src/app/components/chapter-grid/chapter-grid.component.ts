import { Component, Input, OnInit } from '@angular/core';
import { ChapterObject } from '../../models/interfaces/chapter-object.interface';

@Component({
  selector: 'app-chapter-grid',
  templateUrl: './chapter-grid.component.html',
  styleUrls: ['./chapter-grid.component.css']
})
export class ChapterGridComponent implements OnInit {

  @Input() data: ChapterObject[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
