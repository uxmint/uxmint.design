import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UxJobApplyComponent } from './components/ux-job-apply/ux-job-apply.component';
import { UiJobApplyComponent } from './components/ui-job-apply/ui-job-apply.component';
import { UiJobDescriptionComponent } from './components/ui-job-description/ui-job-description.component';
import { UxJobDescriptionComponent } from './components/ux-job-description/ux-job-description.component';

const routes: Routes = [
  { path: 'ui/job-description', component: UiJobDescriptionComponent },
  { path: 'ux/job-description', component: UxJobDescriptionComponent },
  { path: 'ui/apply', component: UiJobApplyComponent },
  { path: 'ux/apply', component: UxJobApplyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
