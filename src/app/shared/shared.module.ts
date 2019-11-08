import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

const PUBLIC_COMPONENTS = [
  DefaultLayoutComponent,
  LoginLayoutComponent
];

@NgModule({
  declarations: [...PUBLIC_COMPONENTS],
  exports: [...PUBLIC_COMPONENTS],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule { }
