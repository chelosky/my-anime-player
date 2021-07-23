import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  @Input() status: boolean;
  @Output() statusChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  changeStatus(){
    this.statusChange.emit(this.status);
  }
}
