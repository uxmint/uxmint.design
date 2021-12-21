import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { UserExperienceComponent } from './components/user-experience/user-experience.component';
import { InterfaceDesignComponent } from './components/interface-design/interface-design.component';
import { UiDevelopmentComponent } from './components/ui-development/ui-development.component';
import { EndToEndDevelopmentComponent } from './components/end-to-end-development/end-to-end-development.component';
import { UsabilityTestingComponent } from './components/usability-testing/usability-testing.component';
import { NgbNavModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';

@NgModule({
  declarations: [UserExperienceComponent, InterfaceDesignComponent, UiDevelopmentComponent, EndToEndDevelopmentComponent, UsabilityTestingComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    NgbNavModule,
    NgbModule,
    NguCarouselModule,
  ]
})
export class ServicesModule { }
