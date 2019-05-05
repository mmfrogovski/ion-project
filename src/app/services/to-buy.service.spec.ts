import { TestBed, inject } from '@angular/core/testing';

import { ToBuyService } from './to-buy.service';

describe('ToBuyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToBuyService]
    });
  });

  it('should be created', inject([ToBuyService], (service: ToBuyService) => {
    expect(service).toBeTruthy();
  }));
});
