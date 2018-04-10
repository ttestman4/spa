import { TestBed, inject } from '@angular/core/testing';

import { LoggerConfigService } from './logger-config.service';
import { LoggerConfig, defaultConfig } from './logger-config';
import { LoggerLevel } from './logger-level.enum';

const configTest: Array<{ message: string, customConfig: Partial<LoggerConfig> }> = [
  {
    message: 'should have all custom config',
    customConfig: {
      level: LoggerLevel.WARN,
      serverLogLevel: LoggerLevel.ERROR,
      serverLoggingUrl: 'http://foo.bar',
    }
  },
  {
    message: 'should have default + custom level config',
    customConfig: {
      level: LoggerLevel.WARN,
    }
  },
  {
    message: 'should have default + custom server log level config',
    customConfig: {
      serverLogLevel: LoggerLevel.ERROR,
    }
  },
  {
    message: 'should have default + custom server url config',
    customConfig: {
      serverLoggingUrl: 'http://foo.bar',
    }
  },
];

describe('LoggerConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoggerConfigService,
        LoggerConfig
      ]
    });
  });

  it('should be created', inject([LoggerConfigService], (service: LoggerConfigService) => {
    expect(service).toBeTruthy();
  }));

  it('should have default config', inject([LoggerConfigService], (service: LoggerConfigService) => {
    const config = service.getConfig();
    expect(config).toBeTruthy();
    expect(config).toEqual(defaultConfig);
  }));

  configTest.forEach((val) => {
    it(val.message + 'when updated via updateConfig function', inject([LoggerConfigService],
      (service: LoggerConfigService) => {
        service.updateConfig(val.customConfig);
        const config = service.getConfig();
        expect(config).toBeTruthy();
        expect(config).toEqual(Object.assign({}, defaultConfig, val.customConfig));
      }));
  });
});

describe('LoggerConfigService with custom config', () => {
  configTest.forEach((val) => {
    it(val.message + 'when injected via provider', () => {
      TestBed.configureTestingModule({
        providers: [
          LoggerConfigService,
          {
            provide: LoggerConfig, useValue: val.customConfig
          }
        ]
      });
      inject([LoggerConfigService], (service: LoggerConfigService) => {
        const config = service.getConfig();
        expect(config).toBeTruthy();
        expect(config).toEqual(Object.assign({}, defaultConfig, val.customConfig));
      });
    });
  });
});
