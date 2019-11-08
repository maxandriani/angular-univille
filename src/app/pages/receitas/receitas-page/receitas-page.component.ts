import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Receita } from 'src/app/receitas/entities/receita.entity';
import { Subject } from 'rxjs';
import { IReceitaFiltros } from 'src/app/receitas/interfaces/i-receita-filtros';
import { ReceitaApiService } from 'src/app/receitas/services/receita-api.service';
import { flatMap, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'tda-receitas-page',
  templateUrl: './receitas-page.component.html',
  styleUrls: ['./receitas-page.component.scss']
})
export class ReceitasPageComponent implements OnInit, OnDestroy {

  receitaList: Array<Receita> = [];

  protected readonly pipeline$ = new Subject<IReceitaFiltros>();
  protected readonly onDestroy$ = new Subject();

  constructor(
    protected readonly receitaApi: ReceitaApiService
  ) { }

  ngOnInit() {
    this.pipeline$
      .pipe(
        flatMap(x => this.receitaApi.getAll(x)),
        map(res => res.result.items),
        takeUntil(this.onDestroy$)
      )
      .subscribe(items => this.receitaList = items);

    this.pipeline$.next();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onFilterChange(values: IReceitaFiltros) {
    this.pipeline$.next(values);
  }

}
