import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquiryFooterComponent } from './enquiry-footer.component';

describe('EnquiryFooterComponent', () => {
  let component: EnquiryFooterComponent;
  let fixture: ComponentFixture<EnquiryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquiryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquiryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
