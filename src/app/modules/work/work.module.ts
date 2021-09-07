import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { NetworkingComponent } from './components/networking/networking.component';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HealthCareComponent } from './components/health-care/health-care.component';
import { NguCarouselModule } from '@ngu/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [NetworkingComponent, EventManagementComponent, HealthCareComponent],
  imports: [
    CommonModule,
    WorkRoutingModule,
    NguCarouselModule,
    NgbModule
  ]
})
export class WorkModule { }
