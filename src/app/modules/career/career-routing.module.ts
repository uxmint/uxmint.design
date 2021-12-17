import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiJobDescriptionComponent } from './components/ui-job-description/ui-job-description.component';
import { JobApplyComponent } from './components/job-apply/job-apply.component';


const routes: Routes = [
  { path: 'job-description', component: UiJobDescriptionComponent },
  { path: 'job/apply', component: JobApplyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
