import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { APP_NAME } from '../../constants/general.constants';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HomeComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    component = TestBed.inject(HomeComponent);
  });

  it('Should create the home component', () => {
    expect(component).toBeTruthy();
    expect(component.appName).toBe(APP_NAME);
  });

});