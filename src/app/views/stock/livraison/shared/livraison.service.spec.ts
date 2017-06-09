import { TestBed, inject } from '@angular/core/testing';

import { LivraisonService } from './livraison.service';

describe('LivraisonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivraisonService]
    });
  });

  it('should be created', inject([LivraisonService], (service: LivraisonService) => {
    expect(service).toBeTruthy();
  }));
});
