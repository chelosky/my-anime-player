import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersContainerComponent } from './chapters-container.component';

describe('ChaptersContainerComponent', () => {
  let component: ChaptersContainerComponent;
  let fixture: ComponentFixture<ChaptersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaptersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaptersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
