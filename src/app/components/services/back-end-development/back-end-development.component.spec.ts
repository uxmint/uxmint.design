import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndDevelopmentComponent } from './back-end-development.component';

describe('BackEndDevelopmentComponent', () => {
  let component: BackEndDevelopmentComponent;
  let fixture: ComponentFixture<BackEndDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
