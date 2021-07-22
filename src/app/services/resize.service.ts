import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  currentSize: number | string = 0;
  private currentSize$: Subject<number|string> = new Subject<number|string>();

  getSize(): Observable<number|string> {
    return this.currentSize$.asObservable();
  }

  setSize(size: number|string): void {
    this.currentSize = size;
    this.currentSize$.next(size);
  }
}
