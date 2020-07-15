import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDesignComponent } from './visual-design.component';

describe('VisualDesignComponent', () => {
  let component: VisualDesignComponent;
  let fixture: ComponentFixture<VisualDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
