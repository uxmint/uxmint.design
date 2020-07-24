import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EventManagementComponent } from './components/projects/event-management/event-management.component';
import { NetworkingComponent } from './components/projects/networking/networking.component';
import { MarketingComponent } from './components/projects/marketing/marketing.component';
import { HealthComponent } from './components/projects/health/health.component';
import { UxConsultingComponent } from './components/services/ux-consulting/ux-consulting.component';
import { VisualDesignComponent } from './components/services/visual-design/visual-design.component';
import { DevelopmentComponent } from './components/services/front-end-development/development.component';
import { TermsAndConditionsComponent } from './components/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyComponent } from './components/pages/privacy/privacy.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogComponent } from './components/blog/blog.component';
import { BackEndDevelopmentComponent } from './components/services/back-end-development/back-end-development.component';
import { UsabilityTestingComponent } from './components/services/usability-testing/usability-testing.component';
import { SkillDevelopmentComponent } from './components/projects/skill-development/skill-development.component';
import { SocialReviewComponent } from './components/projects/social-review/social-review.component';
import { ConstructionPortalComponent } from './components/projects/construction-portal/construction-portal.component';
import { ChildCareComponent } from './components/projects/child-care/child-care.component';
import { HealthCareComponent } from './components/projects/health-care/health-care.component';
import { AppDevelopmentComponent } from './components/projects/app-development/app-development.component';
import { WebDevelopmentComponent } from './components/projects/web-development/web-development.component';
import { CarUsabilityTestingComponent } from './components/projects/car-usability-testing/car-usability-testing.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/networking', component: NetworkingComponent },
  { path: 'projects/marketing', component: MarketingComponent },
  { path: 'projects/event-management', component: EventManagementComponent },
  { path: 'projects/health', component: HealthComponent },
  { path: 'projects/skill-development', component: SkillDevelopmentComponent },
  { path: 'projects/social-review', component: SocialReviewComponent },
  { path: 'projects/construction', component: ConstructionPortalComponent },
  { path: 'projects/child-care', component: ChildCareComponent },
  { path: 'projects/health-care', component: HealthCareComponent },
  { path: 'projects/app-development', component: AppDevelopmentComponent },
  { path: 'projects/web-development', component: WebDevelopmentComponent },
  { path: 'projects/automobile-usability', component: CarUsabilityTestingComponent },
  { path: 'services/user-experience', component: UxConsultingComponent },
  { path: 'services/interface-design', component: VisualDesignComponent },
  { path: 'services/ui-dev', component: DevelopmentComponent },
  { path: 'services/end-to-end', component: BackEndDevelopmentComponent },
  { path: 'services/usability-testing', component: UsabilityTestingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
