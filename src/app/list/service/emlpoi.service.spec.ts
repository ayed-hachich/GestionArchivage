import { TestBed } from '@angular/core/testing';

import { EmlpoiService } from './emlpoi.service';

describe('EmlpoiService', () => {
  let service: EmlpoiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmlpoiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
