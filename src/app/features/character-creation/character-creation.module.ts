import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterCreationRoutingModule } from './character-creation-routing.module';
import { CharacterCreationComponent } from './character-creation.component';


@NgModule({
  declarations: [
    CharacterCreationComponent
  ],
  imports: [
    CommonModule,
    CharacterCreationRoutingModule
  ]
})
export class CharacterCreationModule { }
