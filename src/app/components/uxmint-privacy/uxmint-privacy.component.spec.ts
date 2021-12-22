import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxmintPrivacyComponent } from './uxmint-privacy.component';

describe('UxmintPrivacyComponent', () => {
  let component: UxmintPrivacyComponent;
  let fixture: ComponentFixture<UxmintPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxmintPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxmintPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
