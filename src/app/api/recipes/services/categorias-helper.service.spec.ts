import { TestBed } from '@angular/core/testing';
import { CategoriasHelperService } from './categorias-helper.service';


describe('CategoriasHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriasHelperService = TestBed.get(CategoriasHelperService);
    expect(service).toBeTruthy();
  });
});
