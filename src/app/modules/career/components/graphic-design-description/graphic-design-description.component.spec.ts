import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicDesignDescriptionComponent } from './graphic-design-description.component';

describe('GraphicDesignDescriptionComponent', () => {
  let component: GraphicDesignDescriptionComponent;
  let fixture: ComponentFixture<GraphicDesignDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphicDesignDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicDesignDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
