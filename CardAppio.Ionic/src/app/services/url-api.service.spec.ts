import { TestBed } from '@angular/core/testing';

import { UrlAPIService } from './url-api.service';

describe('UrlAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlAPIService = TestBed.get(UrlAPIService);
    expect(service).toBeTruthy();
  });
});
