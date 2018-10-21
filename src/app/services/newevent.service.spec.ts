import { TestBed, inject } from '@angular/core/testing';

import { NeweventService } from './newevent.service';

describe('NeweventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NeweventService]
    });
  });

  it('should be created', inject([NeweventService], (service: NeweventService) => {
    expect(service).toBeTruthy();
  }));
});
