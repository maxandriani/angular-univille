import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitaDetalhesPageComponent } from './receita-detalhes-page/receita-detalhes-page.component';
import { ReceitaRegisterPageComponent } from './receita-register-page/receita-register-page.component';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';
import { AuthGuard } from 'src/app/shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ReceitasPageComponent
  },
  {
    path: 'new',
    component: ReceitaRegisterPageComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: ':id',
    component: ReceitaDetalhesPageComponent
  },
  {
    path: ':id/edit',
    component: ReceitaRegisterPageComponent,
    canActivate: [
      AuthGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
