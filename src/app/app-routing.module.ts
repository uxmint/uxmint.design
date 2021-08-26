import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren : ()=> import('./modules/pages/pages.module').then(m=>m.PagesModule) },
  { path: 'work', loadChildren : ()=> import('./modules/work/work.module').then(m=>m.WorkModule) },
  { path: 'services', loadChildren : ()=> import('./modules/services/services.module').then(m=>m.ServicesModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
