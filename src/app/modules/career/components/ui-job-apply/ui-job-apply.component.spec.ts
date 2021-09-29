import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiJobApplyComponent } from './ui-job-apply.component';

describe('UiJobApplyComponent', () => {
  let component: UiJobApplyComponent;
  let fixture: ComponentFixture<UiJobApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiJobApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiJobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
