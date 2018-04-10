import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { LoggerHttpService } from './logger-http.service';

describe('LoggerHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, LoggerHttpService]
    });
  });

  it('should be created', inject([LoggerHttpService], (service: LoggerHttpService) => {
    expect(service).toBeTruthy();
  }));
});
