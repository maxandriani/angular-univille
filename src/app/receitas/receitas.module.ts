import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ReceitaFilterComponent } from './components/receita-filter/receita-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ReceitaFormComponent } from './components/receita-form/receita-form.component';

const PUBLIC_COMPONENTS = [
  ReceitaFilterComponent,
  ReceitaFormComponent
];

@NgModule({
  declarations: [...PUBLIC_COMPONENTS],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [...PUBLIC_COMPONENTS]
})
export class ReceitasModule { }
