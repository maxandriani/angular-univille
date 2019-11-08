import { Injectable, Inject } from '@angular/core';
import { AbstractReactiveService } from 'src/app/shared/services/abstract-reactive.service';
import { API_URI } from 'src/app/shared/tokens/api-uri.token';
import { MatSnackBar } from '@angular/material';
import { IReceitaEtapasFiltros } from '../interfaces/i-receita-etapas-filtros';
import { Observable, of } from 'rxjs';
import { IAbpCollection } from 'src/app/shared/interfaces/i-abp-collection';
import { ReceitaEtapa } from '../entities/receita-etapa.entity';
import { IAbpResponse } from 'src/app/shared/interfaces/i-abp-response';
import { retry, map, catchError, first, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaEtapasApiService extends AbstractReactiveService {

  constructor(
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly http: HttpClient,
    protected readonly snackbar: MatSnackBar
  ) {
    super();
  }

  getAll(receitaId: number, filters?: IReceitaEtapasFiltros): Observable<IAbpCollection<ReceitaEtapa>> {
    return this.reactive(
      this.http
        // tslint:disable-next-line:max-line-length
        .get<IAbpResponse<IAbpCollection<ReceitaEtapa>>>(`${this.apiUri}/api/recipes/${receitaId}/steps`, { params: this.parseHttpParams(filters) })
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

  get(recipeId: number, id: number): Observable<ReceitaEtapa> {
    return this.reactive(
      this.http
        .get<IAbpResponse<ReceitaEtapa>>(`${this.apiUri}/api/recipes/${recipeId}/steps/${id}`)
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

  async insert(data: { recipeId: number } & Partial<ReceitaEtapa>): Promise<ReceitaEtapa> {
    return this.http
      .post<IAbpResponse<ReceitaEtapa>>(`${this.apiUri}/api/recipes/${data.recipeId}/steps`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      ).toPromise();
  }

  async update(data: { id: number, recipeId: number } & Partial<ReceitaEtapa>): Promise<ReceitaEtapa> {
    return this.http
      .put<IAbpResponse<ReceitaEtapa>>(`${this.apiUri}/api/recipes/${data.recipeId}/steps/${data.id}`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      )
      .toPromise();
  }

  async delete(data: { id: number, recipeId: number }): Promise<void> {
    return this.http
      .delete<void>(`${this.apiUri}/api/recipes/${data.recipeId}/steps/${data.id}`)
      .pipe(first(), tap(() => this.refresh()))
      .toPromise();
  }

}
