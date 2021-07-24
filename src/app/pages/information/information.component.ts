import { Component, OnInit } from '@angular/core';
import { Information } from '../../models/interfaces/information.interface';
import { PERSONAL, PRIVACY_POLITY, CONDITION_OF_USE } from '../../constants/information.constants';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  data: Information[] = [
    {
      title: 'Personal',
      icon: 'school',
      data: PERSONAL
    },
    {
      title: 'Política de Privacidad',
      icon: 'copyright',
      data: PRIVACY_POLITY
    },
    {
      title: 'Condiciones de Uso',
      icon: 'attribution',
      data: CONDITION_OF_USE
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
