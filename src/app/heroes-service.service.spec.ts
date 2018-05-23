import { TestBed, inject } from '@angular/core/testing';

import { HeroesServiceService } from './heroes-service.service';

describe('HeroesServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroesServiceService]
    });
  });

  it('should be created', inject([HeroesServiceService], (service: HeroesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
