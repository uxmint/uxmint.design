import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUsabilityTestingComponent } from './car-usability-testing.component';

describe('CarUsabilityTestingComponent', () => {
  let component: CarUsabilityTestingComponent;
  let fixture: ComponentFixture<CarUsabilityTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarUsabilityTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarUsabilityTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
