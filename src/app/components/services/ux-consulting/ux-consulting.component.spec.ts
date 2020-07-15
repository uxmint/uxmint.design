import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UxConsultingComponent } from './ux-consulting.component';

describe('UxConsultingComponent', () => {
  let component: UxConsultingComponent;
  let fixture: ComponentFixture<UxConsultingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UxConsultingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UxConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
