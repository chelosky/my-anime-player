import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterItemListComponent } from './chapter-item-list.component';

describe('ChapterItemListComponent', () => {
  let component: ChapterItemListComponent;
  let fixture: ComponentFixture<ChapterItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
