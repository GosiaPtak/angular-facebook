import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture = null;
  let component = null;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    $component = fixture.componentInstance;
    fixture.detectChanges();
  });
  afterEach(() => {
    $component.remove();
});
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
