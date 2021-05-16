import { TestBed } from '@angular/core/testing';

import { MobdataService } from './mobdata.service';

describe('MobdataService', () => {
  let service: MobdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
