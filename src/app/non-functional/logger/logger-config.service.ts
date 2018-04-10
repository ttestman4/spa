import { Injectable } from '@angular/core';
import { LoggerConfig, defaultConfig } from './logger-config';

@Injectable()
export class LoggerConfigService {
  constructor(private config: LoggerConfig) {
    this.updateConfig(config);
  }

  updateConfig(config: Partial<LoggerConfig>) {
    this.config = Object.assign({},
      defaultConfig,
      config);
  }

  getConfig() {
    return this.config;
  }
}
