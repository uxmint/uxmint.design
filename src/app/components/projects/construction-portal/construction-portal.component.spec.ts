import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionPortalComponent } from './construction-portal.component';

describe('ConstructionPortalComponent', () => {
  let component: ConstructionPortalComponent;
  let fixture: ComponentFixture<ConstructionPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
