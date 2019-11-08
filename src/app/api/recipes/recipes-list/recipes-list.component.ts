import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tda-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Array<{id: number, title: string, category: number, excerpt: string, pictureUri: string}> = [];

  constructor(
    protected $recipeService: RecipeService,
    protected $router: Router
  ) { }

  ngOnInit() {
    this.getRecipes();
  }

  redirecionarParaReceita(id: number) {
    this.$router.navigate(['receita', id]);
  }

  async getRecipes() {
    const recipes = await this.$recipeService.getRecipes();
    this.recipes = recipes.result.items;
  }

}
