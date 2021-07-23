import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribbon-corner',
  templateUrl: './ribbon-corner.component.html',
  styleUrls: ['./ribbon-corner.component.css']
})
export class RibbonCornerComponent implements OnInit {

  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
