import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceDesignComponent } from './interface-design.component';

describe('InterfaceDesignComponent', () => {
  let component: InterfaceDesignComponent;
  let fixture: ComponentFixture<InterfaceDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
