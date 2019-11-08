import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasModule as ReceitasApiModule } from '../../receitas/receitas.module';
import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasPageComponent } from './receitas-page/receitas-page.component';
import { ReceitaDetalhesPageComponent } from './receita-detalhes-page/receita-detalhes-page.component';
import { ReceitaRegisterPageComponent } from './receita-register-page/receita-register-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ReceitasPageComponent, ReceitaDetalhesPageComponent, ReceitaRegisterPageComponent],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    SharedModule,
    MaterialModule,
    ReceitasApiModule
  ]
})
export class ReceitasModule { }
