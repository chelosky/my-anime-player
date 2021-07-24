import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';
import { BUTTON_TYPES } from '../../constants/general.constants';
import { ButtonGroup } from '../../models/interfaces/button-group.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  
  currentType: number;
  types: ButtonGroup[] = BUTTON_TYPES;
  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.getCurrent();
  }

  getCurrent(){
    this.currentType = this.settingsService.getType();
  }

  isCurrent(value: number){
    return value === this.currentType;
  }

  changeType(value: number){
    this.currentType = value;
    this.settingsService.setType(value);
  }

  deleteAllData(){
    this.settingsService.removeAllData();
  }
}
