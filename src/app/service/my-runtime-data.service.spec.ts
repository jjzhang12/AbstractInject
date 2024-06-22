import { TestBed } from '@angular/core/testing';

import { MyRuntimeDataService } from './my-runtime-data.service';

describe('MyRuntimeDataService', () => {
  let service: MyRuntimeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyRuntimeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
