import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AnimeService } from '../../services/anime.service';
import { ResizeService } from '../../services/resize.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{


  public subResize$: Subscription;

  constructor(
    private animeService: AnimeService,
    private resizeService: ResizeService
  ) { }

  ngOnInit(): void {
    this.subResize$ = this.resizeService.getSize().subscribe((res) => console.log(res));
  }

  ngOnDestroy(): void {
    this.subResize$.unsubscribe();
  }


}
