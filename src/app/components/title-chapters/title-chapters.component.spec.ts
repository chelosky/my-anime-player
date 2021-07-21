import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleChaptersComponent } from './title-chapters.component';

describe('TitleChaptersComponent', () => {
  let component: TitleChaptersComponent;
  let fixture: ComponentFixture<TitleChaptersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleChaptersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
