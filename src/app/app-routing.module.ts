import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/receitas',
    pathMatch: 'full'
  },
  {
    path: 'receitas',
    loadChildren: () => import('./pages/receitas/receitas.module').then(m => m.ReceitasModule)
  },
  {
    path: 'ingredientes',
    loadChildren: () => import('./pages/ingredientes/ingredientes.module').then(m => m.IngredientesModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then(m => m.UsuariosModule),
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
