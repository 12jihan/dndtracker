import { TestBed } from '@angular/core/testing';

import { RacesandfeatsService } from './racesandfeats.service';

describe('RacesandfeatsService', () => {
  let service: RacesandfeatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RacesandfeatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
