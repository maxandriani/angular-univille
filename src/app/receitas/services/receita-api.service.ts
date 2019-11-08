import { Injectable } from '@angular/core';
import { IReceitaFiltros } from '../interfaces/i-receita-filtros';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAbpResponse } from 'src/app/shared/interfaces/i-abp-response';
import { IAbpCollection } from 'src/app/shared/interfaces/i-abp-collection';
import { Receita } from '../entities/receita.entity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReceitaApiService {

  protected readonly domain = 'https://univille.maxandriani.art.br';

  constructor(
    protected readonly http: HttpClient
  ) { }

  getAll(params?: IReceitaFiltros): Observable<IAbpResponse<IAbpCollection<Receita>>> {
    const httpParams = {};

    if (params) {
      for (const [key, param] of Object.entries(params)) {
        if (param && !Array.isArray(param) || param && param.length > 0) {
          httpParams[key] = param.toString();
        }
      }
    }

    return this.http
      .get<IAbpResponse<IAbpCollection<Receita>>>(`${this.domain}/api/recipes`, { params: httpParams })
      .pipe(
        catchError((err: Error) => {
          alert(err.message);
          return of({ result: { items: [] } });
        })
      );
  }

  get(id: number): Observable<IAbpResponse<Receita>> {
    return this.http
      .get<IAbpResponse<Receita>>(`${this.domain}/api/recipes/${id}`)
      .pipe(
        catchError((err: Error) => {
          alert(err.message);
          return of({ result: null });
        })
      );
  }

}
