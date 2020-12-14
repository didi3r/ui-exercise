import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EmailsService } from './emails.service';

describe('EmailsService', () => {
  let service: EmailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EmailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
