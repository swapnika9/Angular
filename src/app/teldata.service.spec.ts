import { TestBed } from '@angular/core/testing';

import { TeldataService } from './teldata.service';

describe('TeldataService', () => {
  let service: TeldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
