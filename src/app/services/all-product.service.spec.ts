import { TestBed, inject } from '@angular/core/testing';

import { AllProductService } from './all-product.service';

describe('AllProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllProductService]
    });
  });

  it('should be created', inject([AllProductService], (service: AllProductService) => {
    expect(service).toBeTruthy();
  }));
});
