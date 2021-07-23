import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterItemGridComponent } from './chapter-item-grid.component';

describe('ChapterItemGridComponent', () => {
  let component: ChapterItemGridComponent;
  let fixture: ComponentFixture<ChapterItemGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterItemGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
