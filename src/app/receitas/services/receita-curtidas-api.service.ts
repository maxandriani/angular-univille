import { Injectable, Inject } from '@angular/core';
import { AbstractReactiveService } from 'src/app/shared/services/abstract-reactive.service';
import { API_URI } from 'src/app/shared/tokens/api-uri.token';
import { MatSnackBar } from '@angular/material';
import { Observable, of } from 'rxjs';
import { IAbpResponse } from 'src/app/shared/interfaces/i-abp-response';
import { HttpClient } from '@angular/common/http';
import { retry, map, catchError, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReceitaCurtidasApiService extends AbstractReactiveService {

  constructor(
    @Inject(API_URI) protected readonly apiUri: string,
    protected readonly http: HttpClient,
    protected readonly snackbar: MatSnackBar
  ) {
    super();
  }

  getAll(recipeId: number): Observable<number> {
    return this.reactive(
      this.http
        .get<IAbpResponse<number>>(`${this.apiUri}/api/recipes/${recipeId}/likes`)
        .pipe(
          retry(5),
          map(res => res.result),
          catchError(err => {
            this.snackbar.open(err.message, 'Entendi');
            return of(0);
          })
        )
    );
  }

  async like(recipeId: number): Promise<number> {
    return this.http
      .post<IAbpResponse<number>>(`${this.apiUri}/api/recipes/${recipeId}/likes`, undefined)
      .pipe(
        first(),
        map(res => res.result),
        tap(() => this.refresh())
      ).toPromise();
  }

  async dislike(recipeId: number): Promise<void> {
    return this.http
      .delete<void>(`${this.apiUri}/api/recipes/${recipeId}/likes`)
      .pipe(first(), tap(() => this.refresh()))
      .toPromise();
  }

}
