import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/models/interfaces/nav-item.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menu: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menu = [
      {
        displayName: 'Inicio',
        disabled: false,
        iconName:'home',
        route: '/',
      },
      {
        displayName: 'Ranma',
        disabled: false,
        iconName:'ranma',
        customIcon: true,
        children: [
          {
            displayName: 'Capítulos',
            disabled: false,
            iconName:'ballot',
            route: '/caja',
          },
          {
            displayName: 'Ovas',
            disabled: false,
            iconName:'add_shopping_cart',
            route: '/caja/create',
          },
          {
            displayName: 'Películas',
            disabled: false,
            iconName:'add_shopping_cart',
            route: '/caja/create',
          }
        ]
      },
      {
        displayName: 'Dragon Ball Z',
        disabled: false,
        iconName:'goku',
        customIcon: true,
        children: [
          {
            displayName: 'Capítulos',
            disabled: false,
            iconName:'ballot',
            route: '/caja',
          },
          {
            displayName: 'Películas',
            disabled: false,
            iconName:'add_shopping_cart',
            route: '/caja/create',
          }
        ]
      }
    ]
  }

}
