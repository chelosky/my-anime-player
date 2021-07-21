import { Injectable } from '@angular/core';
import { NavItem } from '../models/interfaces/nav-item.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  openSideBar: boolean = true;

  private menu: NavItem[] = [
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
          iconName:'video_library',
          route: '/library/ranma/chapters'
        },
        {
          displayName: 'Ovas',
          disabled: false,
          iconName:'play_lesson',
          route: '/library/ranma/ovas'
        },
        {
          displayName: 'Películas',
          disabled: false,
          iconName:'movie',
          route: '/library/ranma/movies'
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
          iconName:'video_library',
          route: '/library/dbz/chapters',
        },
        {
          displayName: 'Películas',
          disabled: false,
          iconName:'movie',
          route: '/library/dbz/movies',
        }
      ]
    }
  ];

  private extra: NavItem[] = [
    {
      displayName: 'Favoritos',
      disabled: false,
      iconName:'favorite',
      route: '/favorites',
    },
    {
      displayName: 'Información',
      disabled: false,
      iconName:'information',
      route: '/information',
    }
  ];

  constructor() {}

  getMenu(): NavItem[]{
    return this.menu;
  }

  getExtra(): NavItem[]{
    return this.extra;
  }
}
