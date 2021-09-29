import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiJobDescriptionComponent } from './ui-job-description.component';

describe('UiJobDescriptionComponent', () => {
  let component: UiJobDescriptionComponent;
  let fixture: ComponentFixture<UiJobDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiJobDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
