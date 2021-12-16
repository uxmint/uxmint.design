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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', loadChildren : ()=> import('./modules/work/work.module').then(m=>m.WorkModule) },
  { path: 'service', loadChildren : ()=> import('./modules/services/services.module').then(m=>m.ServicesModule) },
  { path: 'career', loadChildren : ()=> import('./modules/career/career.module').then(m=>m.CareerModule)},
  { path: 'blogs', component: BlogsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'careers', component: CareerComponent },
  { path: 'engagement-models', component: EngagementModelsComponent },
  { path: 'works', component: WorksComponent },
  { path: 'services', component: ServicesComponent }
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
