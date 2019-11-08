import { TestBed } from '@angular/core/testing';

import { IngredientApiService } from './ingredient-api.service';

describe('IngredientApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientApiService = TestBed.get(IngredientApiService);
    expect(service).toBeTruthy();
  });
});
