import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainpageRoutingModule { }


// function lazyLoadModules(module: NgModule) { 
//   return import('./components/mainpage/mainpage.module').then(m => m.MainpageModule)
// }