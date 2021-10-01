import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { UiJobDescriptionComponent } from './components/ui-job-description/ui-job-description.component';
import { UxJobDescriptionComponent } from './components/ux-job-description/ux-job-description.component';
import { UxJobApplyComponent } from './components/ux-job-apply/ux-job-apply.component';
import { UiJobApplyComponent } from './components/ui-job-apply/ui-job-apply.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UiJobDescriptionComponent, UxJobDescriptionComponent, UxJobApplyComponent, UiJobApplyComponent],
  imports: [
    CommonModule,
    CareerRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class CareerModule { }
