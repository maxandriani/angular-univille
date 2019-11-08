import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngredientesPageComponent } from './ingredientes-page/ingredientes-page.component';


const routes: Routes = [
  {
    path: '',
    component: IngredientesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientesRoutingModule { }
