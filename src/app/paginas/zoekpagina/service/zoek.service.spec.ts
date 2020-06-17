import { TestBed } from '@angular/core/testing';

import { ZoekService } from './zoek.service';

describe('ZoekService', () => {
  let service: ZoekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
