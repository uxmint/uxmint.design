import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventManagementComponent } from './components/event-management/event-management.component';
import { HealthCareComponent } from './components/health-care/health-care.component';
import { NetworkingComponent } from './components/networking/networking.component';

const routes: Routes = [
  { path: 'event-management', component: EventManagementComponent },
  { path: 'health-care', component: HealthCareComponent },
  { path: 'networking', component: NetworkingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkRoutingModule { }
