import { TestBed } from '@angular/core/testing';

import { ReceitaEtapasApiService } from './receita-etapas-api.service';

describe('ReceitaEtapasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitaEtapasApiService = TestBed.get(ReceitaEtapasApiService);
    expect(service).toBeTruthy();
  });
});
