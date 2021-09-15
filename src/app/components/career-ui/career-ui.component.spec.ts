import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerUiComponent } from './career-ui.component';

describe('CareerUiComponent', () => {
  let component: CareerUiComponent;
  let fixture: ComponentFixture<CareerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
