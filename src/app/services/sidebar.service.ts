import { Injectable } from '@angular/core';
import { NavItem } from '../models/interfaces/nav-item.interface';
import { SIDEBAR_MODE, DIMENSIONS } from '../constants/general.constants';
import { ResizeService } from './resize.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  openSideBar: boolean = true;

  modeSideBar: string = SIDEBAR_MODE.over;

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
    },
    {
      displayName: 'Configuración',
      disabled: false,
      iconName:'settings',
      route: '/settings',
    }
  ];

  constructor(
    private resizeService: ResizeService
  ) {}

  changeModeSideBar(){
    if(this.resizeService.currentSize <= DIMENSIONS.sm && this.openSideBar){
      this.modeSideBar = SIDEBAR_MODE.over;
    }else{
      this.modeSideBar = SIDEBAR_MODE.side;
    }
  }

  clickOutsideMobile(){
    this.openSideBar = false;
    this.changeModeSideBar();
  }

  getMenu(): NavItem[]{
    return this.menu;
  }

  getExtra(): NavItem[]{
    return this.extra;
  }
}
