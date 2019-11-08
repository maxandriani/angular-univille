import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { UsuariosRegisterPageComponent } from './usuarios-register-page/usuarios-register-page.component';


const routes: Routes = [
  {
    path: '',
    component: UsuariosPageComponent
  },
  {
    path: ':id/edit',
    component: UsuariosRegisterPageComponent
  },
  {
    path: 'new',
    component: UsuariosRegisterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
