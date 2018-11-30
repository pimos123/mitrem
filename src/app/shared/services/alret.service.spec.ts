import { TestBed } from '@angular/core/testing';

import { AlretService } from './alret.service';

describe('AlretService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlretService = TestBed.get(AlretService);
    expect(service).toBeTruthy();
  });
});
