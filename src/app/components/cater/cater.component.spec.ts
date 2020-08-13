import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaterComponent } from './cater.component';

describe('CaterComponent', () => {
  let component: CaterComponent;
  let fixture: ComponentFixture<CaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
