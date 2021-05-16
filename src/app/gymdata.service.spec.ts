import { TestBed } from '@angular/core/testing';

import { GymdataService } from './gymdata.service';

describe('GymdataService', () => {
  let service: GymdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GymdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
