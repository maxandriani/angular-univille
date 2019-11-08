import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { MatCardModule, MatButtonModule, MatInputModule, MatSelectModule, MatIconModule, MatAutocompleteModule } from '@angular/material';
import { RecipeFormComponent } from './recipe-form/recipe-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RecipeService } from './services/recipe.service';

@NgModule({
  declarations: [
    RecipesListComponent,
    RecipeFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    HttpClientModule
  ],
  exports: [
    RecipesListComponent,
    RecipeFormComponent
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
