import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RibbonCornerComponent } from './ribbon-corner.component';

describe('RibbonCornerComponent', () => {
  let component: RibbonCornerComponent;
  let fixture: ComponentFixture<RibbonCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RibbonCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
