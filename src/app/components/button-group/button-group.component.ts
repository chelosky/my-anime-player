import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ButtonGroup } from '../../models/interfaces/button-group.interface';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  @Input() disabled: boolean;
  @Input() item: ButtonGroup;
  @Output() selectEvent = new EventEmitter<number>();
  constructor(
  ) { }

  ngOnInit(): void {
  }

  selectButton(){
    this.selectEvent.emit(this.item.value);
  }
}
