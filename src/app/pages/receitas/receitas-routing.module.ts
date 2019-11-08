import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitaDetalhesPageComponent } from './receita-detalhes-page/receita-detalhes-page.component';
import { ReceitaRegisterPageComponent } from './receita-register-page/receita-register-page.component';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';


const routes: Routes = [
  {
    path: '',
    component: ReceitasPageComponent
  },
  {
    path: ':id',
    component: ReceitaDetalhesPageComponent
  },
  {
    path: ':id/edit',
    component: ReceitaRegisterPageComponent
  },
  {
    path: 'new',
    component: ReceitaRegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
