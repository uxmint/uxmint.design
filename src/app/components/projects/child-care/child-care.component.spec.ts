import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCareComponent } from './child-care.component';

describe('ChildCareComponent', () => {
  let component: ChildCareComponent;
  let fixture: ComponentFixture<ChildCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
