import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { EngagementModelsComponent } from './components/engagement-models/engagement-models.component';
import { HomeComponent } from './components/home/home.component';
import { WorksComponent } from './components/works/works.component';
import { ServicesComponent } from './components/services/services.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NguCarouselModule } from '@ngu/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    BlogsComponent,
    CareerComponent,
    ContactComponent,
    EngagementModelsComponent,
    HomeComponent,
    WorksComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NguCarouselModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    NguCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
