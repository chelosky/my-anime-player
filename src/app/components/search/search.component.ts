import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DEBOUNCE_TIME_PREDET_MS } from '../../constants/general.constants';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy{

  valueForm: string = '';
  valueModelChanged: Subject<string> = new Subject<string>();
  valueSub$: Subscription;

  @Input() placeHolder: string = 'Buscar...';
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit(): void {
    this.valueSub$ = this.valueModelChanged
    .pipe(
      debounceTime(DEBOUNCE_TIME_PREDET_MS),
      distinctUntilChanged()
    )
    .subscribe((newValue: string) => {
      this.valueForm = newValue;
      this.valueChange.emit(this.valueForm);
    });
  }

  ngOnDestroy(): void {
    this.valueSub$.unsubscribe();
  }

}
