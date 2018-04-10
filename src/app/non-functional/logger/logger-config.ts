import { LoggerLevel } from './logger-level.enum';

export class LoggerConfig {
  level: LoggerLevel;
  serverLogLevel: LoggerLevel;
  serverLoggingUrl?: string;
}

export const defaultConfig: LoggerConfig = {
  level: LoggerLevel.ERROR,
  serverLogLevel: LoggerLevel.OFF,
  };
