import { TestBed } from '@angular/core/testing';

import { LibrarysService } from './library.service';

describe('LibraryService', () => {
  let service: LibrarysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrarysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
