import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosPageComponent } from './usuarios-page/usuarios-page.component';
import { UsuariosRegisterPageComponent } from './usuarios-register-page/usuarios-register-page.component';


@NgModule({
  declarations: [UsuariosPageComponent, UsuariosRegisterPageComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
