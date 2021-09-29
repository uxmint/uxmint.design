import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxJobApplyComponent } from './ux-job-apply.component';

describe('UxJobApplyComponent', () => {
  let component: UxJobApplyComponent;
  let fixture: ComponentFixture<UxJobApplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxJobApplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxJobApplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
