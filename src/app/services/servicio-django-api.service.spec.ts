import { TestBed } from '@angular/core/testing';

import { ServicioDjangoAPIService } from './servicio-django-api.service';

describe('ServicioDjangoAPIService', () => {
  let service: ServicioDjangoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDjangoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
