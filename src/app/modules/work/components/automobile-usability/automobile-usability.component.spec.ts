import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomobileUsabilityComponent } from './automobile-usability.component';

describe('AutomobileUsabilityComponent', () => {
  let component: AutomobileUsabilityComponent;
  let fixture: ComponentFixture<AutomobileUsabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomobileUsabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomobileUsabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
