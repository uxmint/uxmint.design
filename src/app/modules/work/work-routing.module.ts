import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HealthCareComponent } from './components/health-care/health-care.component';
import { NetworkingComponent } from './components/networking/networking.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { AutomobileUsabilityComponent } from './components/automobile-usability/automobile-usability.component';
import { ChildcarePortalComponent } from './components/childcare-portal/childcare-portal.component';
import { ConstructionPortalComponent } from './components/construction-portal/construction-portal.component';
import { SkillDevelopmentComponent } from './components/skill-development/skill-development.component';
import { UxaheadComponent } from './components/uxahead/uxahead.component';

const routes: Routes = [
  { path: 'event-management', component: EventManagementComponent },
  { path: 'health-care', component: HealthCareComponent },
  { path: 'networking', component: NetworkingComponent },
  { path: 'marketing', component: MarketingComponent },
  { path: 'automobile-usability', component: AutomobileUsabilityComponent},
  { path: 'childcare-portal', component: ChildcarePortalComponent},
  { path: 'construction-portal', component: ConstructionPortalComponent},
  { path: 'skill-development', component: SkillDevelopmentComponent},
  { path: 'uxahead', component: UxaheadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
