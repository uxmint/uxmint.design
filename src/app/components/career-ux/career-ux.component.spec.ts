import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerUxComponent } from './career-ux.component';

describe('CareerUxComponent', () => {
  let component: CareerUxComponent;
  let fixture: ComponentFixture<CareerUxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerUxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerUxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
