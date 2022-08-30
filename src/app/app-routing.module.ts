import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    pathMatch: 'full',
    loadChildren: () => import('./features/mainpage/mainpage.module').then(m => m.MainpageModule)
  },
  {
    path: 'character-creation',
    pathMatch: 'full',
    loadChildren: () => import('./features/character-creation/character-creation.module').then(m => m.CharacterCreationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }