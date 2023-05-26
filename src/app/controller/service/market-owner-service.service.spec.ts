import { TestBed } from '@angular/core/testing';

import { MarketOwnerServiceService } from './market-owner-service.service';

describe('MarketOwnerServiceService', () => {
  let service: MarketOwnerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketOwnerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
