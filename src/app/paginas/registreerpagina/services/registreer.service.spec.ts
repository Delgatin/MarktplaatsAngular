import { TestBed } from '@angular/core/testing';


import { RegistreerService } from './registreer.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('RegistreerService', () => {
  let service: RegistreerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(RegistreerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
