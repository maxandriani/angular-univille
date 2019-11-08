import { Injectable, Inject } from '@angular/core';
import { API_URI } from 'src/app/shared/tokens/api-uri.token';
import { MatSnackBar } from '@angular/material';
import { IReceitaIngredientesFiltros } from '../interfaces/i-receita-ingredientes-filtros';
import { Observable, of } from 'rxjs';
import { IAbpCollection } from 'src/app/shared/interfaces/i-abp-collection';
import { AbstractReactiveService } from 'src/app/shared/services/abstract-reactive.service';
import { IAbpResponse } from 'src/app/shared/interfaces/i-abp-response';
import { ReceitaIngredientes } from '../entities/receita-ingredientes.entity';
import { retry, map, catchError, first, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaIngredientesApiService extends AbstractReactiveService {

  constructor(
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly http: HttpClient,
    protected readonly snackbar: MatSnackBar
  ) {
    super();
  }

  getAll(receitaId: number, filters?: IReceitaIngredientesFiltros): Observable<IAbpCollection<ReceitaIngredientes>> {
    return this.reactive(
      this.http
        // tslint:disable-next-line:max-line-length
        .get<IAbpResponse<IAbpCollection<ReceitaIngredientes>>>(`${this.apiUri}/api/recipes/${receitaId}/ingredients`, { params: this.parseHttpParams(filters) })
        .pipe(
          retry(5),
          map(res => res.result),
          catchError(err => {
            this.snackbar.open(err.message, 'Entendi');
            return of({
              items: []
            });
          })
        )
    );
  }

  get(recipeId: number, id: number): Observable<ReceitaIngredientes> {
    return this.reactive(
      this.http
        .get<IAbpResponse<ReceitaIngredientes>>(`${this.apiUri}/api/recipes/${recipeId}/ingredients/${id}`)
        .pipe(
          retry(5),
          map(res => res.result),
          catchError(err => {
            this.snackbar.open(err.message, 'Entendi');
            return of(undefined);
          })
        )
    );
  }

  async insert(data: { recipeId: number } & Partial<ReceitaIngredientes>): Promise<ReceitaIngredientes> {
    return this.http
      .post<IAbpResponse<ReceitaIngredientes>>(`${this.apiUri}/api/recipes/${data.recipeId}/ingredients`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      ).toPromise();
  }

  async update(data: { id: number, recipeId: number } & Partial<ReceitaIngredientes>): Promise<ReceitaIngredientes> {
    return this.http
      .put<IAbpResponse<ReceitaIngredientes>>(`${this.apiUri}/api/recipes/${data.recipeId}/ingredients/${data.id}`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      )
      .toPromise();
  }

  async delete(data: { id: number, recipeId: number }): Promise<void> {
    return this.http
      .delete<void>(`${this.apiUri}/api/recipes/${data.recipeId}/ingredients/${data.id}`)
      .pipe(first(), tap(() => this.refresh()))
      .toPromise();
  }

}
