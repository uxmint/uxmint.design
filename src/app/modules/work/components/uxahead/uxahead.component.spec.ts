import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxaheadComponent } from './uxahead.component';

describe('UxaheadComponent', () => {
  let component: UxaheadComponent;
  let fixture: ComponentFixture<UxaheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxaheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
