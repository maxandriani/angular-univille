import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class LoginModule { }
