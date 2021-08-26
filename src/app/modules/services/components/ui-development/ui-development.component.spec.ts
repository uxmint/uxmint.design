import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiDevelopmentComponent } from './ui-development.component';

describe('UiDevelopmentComponent', () => {
  let component: UiDevelopmentComponent;
  let fixture: ComponentFixture<UiDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
