import { TestBed } from '@angular/core/testing';

import { ReceitaApiService } from './receita-api.service';

describe('ReceitaApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitaApiService = TestBed.get(ReceitaApiService);
    expect(service).toBeTruthy();
  });
});
