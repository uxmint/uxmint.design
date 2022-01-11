import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { EngagementModelsComponent } from './components/engagement-models/engagement-models.component';
import { WorksComponent } from './components/works/works.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { UxmintPrivacyComponent } from './components/uxmint-privacy/uxmint-privacy.component';
import { UxmintTermsComponent } from './components/uxmint-terms/uxmint-terms.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  {
    path: '', component: HomeComponent,
    data: {
      seo: {
        title: 'Uxmint Design',
        metaTags: [
          {name: 'description', content: `Uxmint Design specialises in research based Experience Design (UX), Interface Design (UI), Branding and Product Ideation, Usability Testing and UI Development.` },
          {name: 'keywords', content: `UX consulting, ui/ux agency, user-centered design, product design, user experience, lean ux, agile ux, ux consultant, ui design company, design company, ui company, ux design company, ui ux company, user experience design agency, digital design agency, best design agency, ux design agency in india, ux ui design agencies, ui ux studio, uiux studio, ui studio, creative design studio, website design company, ux design company in india, best ux companies, ui ux design companies in chennai, top ux companies, top ux agencies, ux/ui contracting companies, top ux agency, best design agency, design partners, process improvement, UX Consultant`},
          { property: 'og:title', content: 'Uxmint Design' },
          { proprety: 'og:description', content: 'Uxmint Design specialises in research based Experience Design (UX), Interface Design (UI), Branding and Product Ideation, Usability Testing and UI Development.' },
          { property: 'og:image', content: 'assets/images/home/transformation.png' },
          { property: 'og:url', content: '' },
        ]
      }
    }
  },
  { path: 'work', loadChildren : ()=> import('./modules/work/work.module').then(m=>m.WorkModule) },
  { path: 'service', loadChildren : ()=> import('./modules/services/services.module').then(m=>m.ServicesModule) },
  { path: 'career', loadChildren : ()=> import('./modules/career/career.module').then(m=>m.CareerModule)},
  { path: 'blogs', component: BlogsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'engagement-models', component: EngagementModelsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'privacy-policy', component: UxmintPrivacyComponent },
  { path: 'terms-and-conditions', component: UxmintTermsComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
