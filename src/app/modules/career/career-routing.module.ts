import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiJobDescriptionComponent } from './components/ui-job-description/ui-job-description.component';
import { JobApplyComponent } from './components/job-apply/job-apply.component';
import { GraphicDesignDescriptionComponent } from './components/graphic-design-description/graphic-design-description.component';


const routes: Routes = [
  { path: 'ui/job-description', component: UiJobDescriptionComponent },
  { path: 'job/apply', component: JobApplyComponent },
  { path: 'graphic-design/description', component: GraphicDesignDescriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
