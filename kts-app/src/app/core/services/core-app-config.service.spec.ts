import { TestBed } from '@angular/core/testing';

import { CoreAppConfigService } from './core-app-config.service';

describe('CoreAppConfigService', () => {
  let service: CoreAppConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoreAppConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
