import { TestBed } from '@angular/core/testing';

import { Devise } from './devise';

describe('Devise', () => {
  let service: Devise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Devise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
