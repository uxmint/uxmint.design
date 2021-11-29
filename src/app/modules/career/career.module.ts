import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { UiJobDescriptionComponent } from './components/ui-job-description/ui-job-description.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { JobApplyComponent } from './components/job-apply/job-apply.component';
import { GraphicDesignDescriptionComponent } from './components/graphic-design-description/graphic-design-description.component';



@NgModule({
  declarations: [UiJobDescriptionComponent, JobApplyComponent, GraphicDesignDescriptionComponent],
  imports: [
    CommonModule,
    CareerRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class CareerModule { }
