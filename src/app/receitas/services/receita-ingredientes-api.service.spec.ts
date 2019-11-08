import { TestBed } from '@angular/core/testing';

import { ReceitaIngredientesApiService } from './receita-ingredientes-api.service';

describe('ReceitaIngredientesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitaIngredientesApiService = TestBed.get(ReceitaIngredientesApiService);
    expect(service).toBeTruthy();
  });
});
