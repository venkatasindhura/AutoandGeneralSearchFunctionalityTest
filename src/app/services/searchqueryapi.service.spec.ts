import { TestBed } from '@angular/core/testing';

import { SearchqueryapiService } from './searchqueryapi.service';

describe('SearchqueryapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchqueryapiService = TestBed.get(SearchqueryapiService);
    expect(service).toBeTruthy();
  });
});
