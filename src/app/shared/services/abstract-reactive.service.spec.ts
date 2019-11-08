import { TestBed } from '@angular/core/testing';

import { AbstractReactiveService } from './abstract-reactive.service';

describe('AbstractReactiveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbstractReactiveService = TestBed.get(AbstractReactiveService);
    expect(service).toBeTruthy();
  });
});
