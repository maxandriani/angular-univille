import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientesRoutingModule } from './ingredientes-routing.module';
import { IngredientesPageComponent } from './ingredientes-page/ingredientes-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [IngredientesPageComponent],
  imports: [
    CommonModule,
    IngredientesRoutingModule,
    SharedModule
  ]
})
export class IngredientesModule { }
