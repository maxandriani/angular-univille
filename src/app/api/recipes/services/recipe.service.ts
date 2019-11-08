import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  url = 'http://univille.maxandriani.art.br/api/recipes';

  constructor(
    protected $httpClient: HttpClient
  ) { }

  getRecipes(): Promise<any> {
    return this.$httpClient.get(this.url).pipe(first()).toPromise();
  }

  getRecipe(id: number): Promise<any> {
    return this.$httpClient.get(this.url + '/' + id).pipe(first()).toPromise();
  }
}
