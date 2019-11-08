import { Injectable, Inject } from '@angular/core';
import { AbstractReactiveService } from 'src/app/shared/services/abstract-reactive.service';
import { API_URI } from 'src/app/shared/tokens/api-uri.token';
import { MatSnackBar } from '@angular/material';
import { IUsuarioFiltros } from '../interfaces/i-usuario-filtros';
import { Observable, of } from 'rxjs';
import { IAbpCollection } from 'src/app/shared/interfaces/i-abp-collection';
import { UserEntity } from 'src/app/shared/entities/user.entity';
import { IAbpResponse } from 'src/app/shared/interfaces/i-abp-response';
import { retry, map, catchError, first, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosApiService extends AbstractReactiveService {

  constructor(
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly http: HttpClient,
    protected readonly snackbar: MatSnackBar
  ) {
    super();
  }

  getAll(filters?: IUsuarioFiltros): Observable<IAbpCollection<UserEntity>> {
    return this.reactive(
      this.http
        // tslint:disable-next-line:max-line-length
        .get<IAbpResponse<IAbpCollection<UserEntity>>>(`${this.apiUri}/api/ingredients`, { params: this.parseHttpParams(filters) })
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

  get(id: number): Observable<UserEntity> {
    return this.reactive(
      this.http
        .get<IAbpResponse<UserEntity>>(`${this.apiUri}/api/ingredients/${id}`)
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

  async insert(data: Partial<UserEntity>): Promise<UserEntity> {
    return this.http
      .post<IAbpResponse<UserEntity>>(`${this.apiUri}/api/ingredients`, data)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      ).toPromise();
  }

  async update(data: Partial<UserEntity>): Promise<UserEntity> {
    return this.http
      .put<IAbpResponse<UserEntity>>(`${this.apiUri}/api/ingredients/${data.id}`, data)
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
