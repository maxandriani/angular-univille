import { Injectable } from '@angular/core';
import { CategoriasEnum } from '../enums/categorias.enum';

export interface ICategoriasEnum {
  categoria: CategoriasEnum;
  label: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasHelperService {

  constructor() { }

  protected readonly categoriasList: ICategoriasEnum[] = [
    { categoria: CategoriasEnum.Bebidas, label: 'Bebidas' },
    { categoria: CategoriasEnum.Carnes,  label: 'Carnes' },
    { categoria: CategoriasEnum.Doces,   label: 'Doces' },
    { categoria: CategoriasEnum.Lanches, label: 'Lanches' }
  ];

  getCategoriasList(): ICategoriasEnum[] {
    return this.categoriasList;
  }
}
