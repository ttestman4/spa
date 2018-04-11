import { TestBed, inject } from '@angular/core/testing';

import { LoggerConfigService } from './logger-config.service';
import { defaultConfig} from './logger-config';
import * as fromLogger from './logger.module';

const configTest: Array<{ message: string, customConfig: Partial<fromLogger.LoggerConfig> }> = [
  {
    message: 'should have all custom config',
    customConfig: {
      level: fromLogger.LoggerLevel.WARN,
      serverLogLevel: fromLogger.LoggerLevel.ERROR,
      serverLoggingUrl: 'http://foo.bar',
    }
  },
  {
    message: 'should have default + custom level config',
    customConfig: {
      level: fromLogger.LoggerLevel.WARN,
    }
  },
  {
    message: 'should have default + custom server log level config',
    customConfig: {
      serverLogLevel: fromLogger.LoggerLevel.ERROR,
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
      imports: [fromLogger.LoggerModule],
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
        imports: [fromLogger.LoggerModule],
        providers: [
          LoggerConfigService,
          {
            provide: fromLogger.LoggerConfig, useValue: val.customConfig
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
