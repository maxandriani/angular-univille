import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IReceitaFiltros } from '../../interfaces/i-receita-filtros';
import { Observable } from 'rxjs';

@Component({
  selector: 'tda-receita-filter',
  templateUrl: './receita-filter.component.html',
  styleUrls: ['./receita-filter.component.scss']
})
export class ReceitaFilterComponent
  implements OnInit,
             OnChanges {

  readonly filterForm = this.fb.group({
    search: [''],
    categories: this.fb.array([]),
    serves: [],
    authors: this.fb.array([]),
    ingredients: this.fb.array([]),
    minTime: [],
    maxTime: []
  });

  @Input() values: IReceitaFiltros;
  @Output() valueChange: Observable<IReceitaFiltros> = this.filterForm.valueChanges;

  constructor(
    protected readonly fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.values) {
      if (this.values) {
        this.filterForm.patchValue(this.values);
      } else {
        this.filterForm.reset();
      }
    }
  }

}
