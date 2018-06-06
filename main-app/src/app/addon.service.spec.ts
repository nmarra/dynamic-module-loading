import { TestBed, inject } from '@angular/core/testing';

import { AddonService } from './addon.service';

describe('AddonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddonService]
    });
  });

  it('should be created', inject([AddonService], (service: AddonService) => {
    expect(service).toBeTruthy();
  }));
});
