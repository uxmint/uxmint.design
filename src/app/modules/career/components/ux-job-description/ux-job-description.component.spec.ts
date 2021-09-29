import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxJobDescriptionComponent } from './ux-job-description.component';

describe('UxJobDescriptionComponent', () => {
  let component: UxJobDescriptionComponent;
  let fixture: ComponentFixture<UxJobDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxJobDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
