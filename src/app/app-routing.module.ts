import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/mainpage/mainpage.module').then(m => m.MainpageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// function lazyLoadModules(module: NgModule) { 
//   return import('./components/mainpage/mainpage.module').then(m => m.MainpageModule)
// }