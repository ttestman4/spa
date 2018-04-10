import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { LoggerService } from './logger.service';
import { LoggerConfigService } from './logger-config.service';
import { LoggerConfig } from './logger-config';
import { LoggerHttpService } from './logger-http.service';

describe('LoggerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggerService, LoggerConfigService, LoggerConfig, LoggerHttpService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([LoggerService], (service: LoggerService) => {
    expect(service).toBeTruthy();
  }));
});
