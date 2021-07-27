import { Component } from '@angular/core';
import { APP_NAME } from '../../constants/general.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  appName: string = APP_NAME;

}
