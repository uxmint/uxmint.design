import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CareerComponent } from './components/career/career.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WorkComponent } from './components/work/work.component';
import { EngagementModelsComponent } from './components/engagement-models/engagement-models.component';


@NgModule({
  declarations: [HomeComponent, ContactComponent, BlogsComponent, CareerComponent, AboutUsComponent, WorkComponent, EngagementModelsComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
