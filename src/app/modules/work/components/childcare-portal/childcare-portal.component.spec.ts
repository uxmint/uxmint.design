import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcarePortalComponent } from './childcare-portal.component';

describe('ChildcarePortalComponent', () => {
  let component: ChildcarePortalComponent;
  let fixture: ComponentFixture<ChildcarePortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcarePortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcarePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
