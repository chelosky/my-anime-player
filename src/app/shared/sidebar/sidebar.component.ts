import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { ResizeService } from '../../services/resize.service';
import { DIMENSIONS, SIDEBAR_MODE } from '../../constants/general.constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  constructor(
    public sidebarService: SidebarService,
    private resizeService: ResizeService
  ) { }

  ngOnInit(): void {
  }

  changeSideBar(){
    this.sidebarService.openSideBar = !this.sidebarService.openSideBar;
    this.sidebarService.changeModeSideBar();
  }

  ngOnDestroy(): void {
  }
}
