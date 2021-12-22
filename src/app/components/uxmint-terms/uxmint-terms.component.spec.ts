import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxmintTermsComponent } from './uxmint-terms.component';

describe('UxmintTermsComponent', () => {
  let component: UxmintTermsComponent;
  let fixture: ComponentFixture<UxmintTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxmintTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxmintTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
