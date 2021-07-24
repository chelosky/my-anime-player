import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '../../services/anime.service';
import { ResizeService } from '../../services/resize.service';
import { APP_NAME } from '../../constants/general.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  appName: string = APP_NAME;
  public subResize$: Subscription;

  constructor(
    private resizeService: ResizeService
  ) { }

  ngOnInit(): void {
    this.subResize$ = this.resizeService.getSize().subscribe((res) => console.log(res));
  }

  
  ngOnDestroy(): void {
    this.subResize$.unsubscribe();
  }


}
