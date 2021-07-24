import { Component, OnDestroy, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { ResizeService } from '../services/resize.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit, OnDestroy {

  subResize$: Subscription;
  constructor(
    public sidebarService: SidebarService,
    private resizeService: ResizeService
  ) { }


  ngOnInit(): void {
    this.subResize$ = this.resizeService.getSize().subscribe((res) => this.changeModeSideBar());
  }

  changeModeSideBar(){
    this.sidebarService.changeModeSideBar();
  }

  clickOutMobile(){
    this.sidebarService.clickOutsideMobile();
  }

  ngOnDestroy(): void {
    this.subResize$.unsubscribe();
  }

}
