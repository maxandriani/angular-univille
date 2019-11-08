import { TestBed } from '@angular/core/testing';

import { ReceitaCurtidasApiService } from './receita-curtidas-api.service';

describe('ReceitaCurtidasApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceitaCurtidasApiService = TestBed.get(ReceitaCurtidasApiService);
    expect(service).toBeTruthy();
  });
});
