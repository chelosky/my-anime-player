import { Component, HostListener, OnInit } from '@angular/core';
import { ResizeService} from './services/resize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private resizeService: ResizeService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.onResize(0);
    }, 0);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resizeService.setSize( window.innerWidth );
  }
}
