import { Component, Input, OnInit } from '@angular/core';
import { AccordionData } from '../../../models/interfaces/accordion-data.interface';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {

  @Input() index: number;
  @Input() item: AccordionData;
  constructor() { }

  ngOnInit(): void {
  }

}
