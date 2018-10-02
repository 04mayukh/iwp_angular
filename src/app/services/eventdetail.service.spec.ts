import { TestBed, inject } from '@angular/core/testing';

import { EventdetailService } from './eventdetail.service';

describe('EventdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventdetailService]
    });
  });

  it('should be created', inject([EventdetailService], (service: EventdetailService) => {
    expect(service).toBeTruthy();
  }));
});
