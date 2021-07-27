import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ResizeService } from './services/resize.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('Component: App', () => {
  let component: AppComponent;
  let resizeSpy: jasmine.SpyObj<ResizeService>;

  beforeEach(async(() => {
    const spy = jasmine.createSpyObj('ResizeService', ['setSize', 'getSize']);
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule
      ],
      providers: [
        { provide: ResizeService, useValue: spy } 
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    resizeSpy = TestBed.inject(ResizeService) as jasmine.SpyObj<ResizeService>;
  }));

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit should execute resize screen', fakeAsync(() => {
    const spy = spyOn(component, 'onResize');
    component.ngOnInit();
    tick(500)
    expect(spy).toHaveBeenCalled();
  }));

  it('#onResize should save a specific size screen', () => {
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  })

});
