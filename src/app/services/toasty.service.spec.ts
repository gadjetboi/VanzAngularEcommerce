import { TestBed, inject } from '@angular/core/testing';

import { ToastyMessageService } from './toasty.service';

describe('ToastyMessageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastyMessageService]
    });
  });

  it('should be created', inject([ToastyMessageService], (service: ToastyMessageService) => {
    expect(service).toBeTruthy();
  }));
});
