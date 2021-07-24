import { Component, Input, OnInit } from '@angular/core';
import { AccordionData } from '../../../models/interfaces/accordion-data.interface';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @Input() data: AccordionData[];
  constructor() { }

  ngOnInit(): void {
  }

}
