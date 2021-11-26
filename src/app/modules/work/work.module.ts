import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { NetworkingComponent } from './components/networking/networking.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HealthCareComponent } from './components/health-care/health-care.component';
import { NguCarouselModule } from '@ngu/carousel';
import { AutomobileUsabilityComponent } from './components/automobile-usability/automobile-usability.component';
import { ChildcarePortalComponent } from './components/childcare-portal/childcare-portal.component';
import { ConstructionPortalComponent } from './components/construction-portal/construction-portal.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { SkillDevelopmentComponent } from './components/skill-development/skill-development.component';
import { UxaheadComponent } from './components/uxahead/uxahead.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NetworkingComponent, EventManagementComponent, HealthCareComponent, AutomobileUsabilityComponent, ChildcarePortalComponent, ConstructionPortalComponent, MarketingComponent, SkillDevelopmentComponent, UxaheadComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    NguCarouselModule,
    NgbModule
  ]
})
export class WorkModule { }
