import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { LoggerHttpService } from './logger-http.service';

describe('LoggerHttpService', () => {
  let http: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ LoggerHttpService]
    });
    http = TestBed.get(HttpClient);
    spyOn(http, 'post');
  });

  it('should be created', inject([LoggerHttpService], (service: LoggerHttpService) => {
    expect(service).toBeTruthy();
    service.logOnServer('url', 'message', [], 'timestamp', 'Error');
    expect(http.post).toHaveBeenCalled();
    const body = {
      level: 'Error',
      message: 'message',
      additional: [],
      timestamp: 'timestamp'
    };

    const options = {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    };
    expect(http.post).toHaveBeenCalledWith('url', body, options);
  }));
});
