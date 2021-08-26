import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EndToEndDevelopmentComponent } from './components/end-to-end-development/end-to-end-development.component';
import { InterfaceDesignComponent } from './components/interface-design/interface-design.component';
import { UiDevelopmentComponent } from './components/ui-development/ui-development.component';
import { UsabilityTestingComponent } from './components/usability-testing/usability-testing.component';
import { UserExperienceComponent } from './components/user-experience/user-experience.component';

const routes: Routes = [
  { path: 'end-to-end-development', component: EndToEndDevelopmentComponent },
  { path: 'interface-design', component: InterfaceDesignComponent },
  { path: 'ui-development', component: UiDevelopmentComponent },
  { path: 'usability-testing', component: UsabilityTestingComponent },
  { path: 'user-experience', component: UserExperienceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
