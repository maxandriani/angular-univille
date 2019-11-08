import { TestBed } from '@angular/core/testing';

import { UsuariosApiService } from './usuarios-api.service';

describe('UsuariosApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuariosApiService = TestBed.get(UsuariosApiService);
    expect(service).toBeTruthy();
  });
});
