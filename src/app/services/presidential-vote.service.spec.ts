import { TestBed } from '@angular/core/testing';

import { PresidentialVoteService } from './presidential-vote.service';

describe('PresidentialVoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresidentialVoteService = TestBed.get(PresidentialVoteService);
    expect(service).toBeTruthy();
  });
});
