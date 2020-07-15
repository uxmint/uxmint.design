import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialReviewComponent } from './social-review.component';

describe('SocialReviewComponent', () => {
  let component: SocialReviewComponent;
  let fixture: ComponentFixture<SocialReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
