import { TestBed } from '@angular/core/testing';

import { ItskGridConfigService } from './itsk-grid-config.service';

describe('ItskGridConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItskGridConfigService = TestBed.get(ItskGridConfigService);
    expect(service).toBeTruthy();
  });
});
