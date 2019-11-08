import { Injectable, Inject } from '@angular/core';
import { API_URI } from 'src/app/shared/tokens/api-uri.token';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AbstractReactiveService } from 'src/app/shared/services/abstract-reactive.service';
import { IAbpCollection } from 'src/app/shared/interfaces/i-abp-collection';
import { Ingrediente } from '../entities/ingrediente.entity';
import { IAbpResponse } from 'src/app/shared/interfaces/i-abp-response';
import { map, catchError, first, retry, tap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { IIngredienteFiltro } from '../interfaces/i-ingredient-filtro';

@Injectable({
  providedIn: 'root'
})
export class IngredientApiService extends AbstractReactiveService {

  constructor(
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly http: HttpClient,
    protected readonly snackbar: MatSnackBar
  ) {
    super();
  }

  getAll(filters?: IIngredienteFiltro): Observable<IAbpCollection<Ingrediente>> {
    return this.reactive(
      this.http
        // tslint:disable-next-line:max-line-length
        .get<IAbpResponse<IAbpCollection<Ingrediente>>>(`${this.apiUri}/api/ingredients`, { params: this.parseHttpParams(filters) })
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

  get(id: number): Observable<Ingrediente> {
    return this.reactive(
      this.http
        .get<IAbpResponse<Ingrediente>>(`${this.apiUri}/api/ingredients/${id}`)
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

  async insert(data: Partial<Ingrediente>): Promise<Ingrediente> {
    return this.http
      .post<IAbpResponse<Ingrediente>>(`${this.apiUri}/api/ingredients`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      ).toPromise();
  }

  async update(data: { id: number } & Partial<Ingrediente>): Promise<Ingrediente> {
    return this.http
      .put<IAbpResponse<Ingrediente>>(`${this.apiUri}/api/ingredients/${data.id}`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      )
      .toPromise();
  }

  async delete(data: { id: number }): Promise<void> {
    return this.http
      .delete<void>(`${this.apiUri}/api/ingredients/${data.id}`)
      .pipe(first(), tap(() => this.refresh()))
      .toPromise();
  }

}
