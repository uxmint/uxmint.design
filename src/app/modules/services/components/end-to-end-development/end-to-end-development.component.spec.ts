import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndToEndDevelopmentComponent } from './end-to-end-development.component';

describe('EndToEndDevelopmentComponent', () => {
  let component: EndToEndDevelopmentComponent;
  let fixture: ComponentFixture<EndToEndDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndToEndDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndToEndDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
