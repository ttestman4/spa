import { Injectable } from '@angular/core';
import { LoggerLevel } from './logger-level.enum';
import { LoggerConfig } from './logger-config';
import { LoggerConfigService } from './logger-config.service';
import { LoggerHttpService } from './logger-http.service';

const Levels = [
  'TRACE',
  'DEBUG',
  'INFO',
  'LOG',
  'WARN',
  'ERROR',
  'OFF'
];

@Injectable()
export class LoggerService {

  constructor(
    private configService: LoggerConfigService,
    private readonly httpService: LoggerHttpService
  ) {
  }

  public trace(message: Error | string, ...additional: any[]): void {
    this._log(LoggerLevel.TRACE, message, additional);
  }

  public debug(message: Error | string, ...additional: any[]): void {
    this._log(LoggerLevel.DEBUG, message, additional);
  }

  public info(message: Error | string, ...additional: any[]): void {
    this._log(LoggerLevel.INFO, message, additional);
  }

  public log(message: Error | string, ...additional: any[]): void {
    this._log(LoggerLevel.LOG, message, additional);
  }

  public warn(message: Error | string, ...additional: any[]): void {
    this._log(LoggerLevel.WARN, message, additional);
  }

  public error(message: Error | string, ...additional: any[]): void {
    this._log(LoggerLevel.ERROR, message, additional);
  }

  public updateConfig(config: LoggerConfig) {
    this.configService.updateConfig(config);
  }

  public getConfig() {
    return this.configService.getConfig();
  }

  private _prepareMessage(message: Error | string) {
    try {
      if (message instanceof Error) {
        message = message.stack;
      } else if (typeof message !== 'string') {
        message = JSON.stringify(message, null, 2);
      }
    } catch (e) {
      // additional = [message, ...additional];
      message = 'The provided "message" value could not be parsed with JSON.stringify().';
    }

    return message;
  }

  private _prepareAdditionalParameters(additional: any[]) {
    if (additional === null || additional === undefined) {
      return null;
    }

    return additional.map((next, idx) => {
      try {
        // We just want to make sure the JSON can be parsed, we do not want to actually change the type
        if (typeof next === 'object') {
          JSON.stringify(next);
        }

        return next;
      } catch (e) {
        return `The additional[${idx}] value could not be parsed using JSON.stringify().`
      }
    });
  }

  private _log(level: LoggerLevel,
    message: Error | string,
    additional: any[] = []): void {

    if (!message) {
      return;
    }

    const logLevelString = Levels[level];

    message = this._prepareMessage(message);

    // only use validated parameters for HTTP requests
    const validatedAdditionalParameters =
      this._prepareAdditionalParameters(additional);

    const timestamp = new Date().toISOString();
    const config = this.configService.getConfig();

    if (config.serverLoggingUrl && level >= config.serverLogLevel) {
      // Allow logging on server even if client log level is off
      this.httpService.logOnServer(config.serverLoggingUrl,
        message, validatedAdditionalParameters,
        timestamp,
        logLevelString);
    }

    // if no message or the log level is less than the environ
    if (level < config.level) {
      return;
    }

    const color = this._getColor(level);

    console.log(`%c${timestamp} [${logLevelString}]`, `color:${color}`, message, ...(additional || []));
  }

  private _getColor(level: LoggerLevel): 'black' | 'blue' | 'teal' | 'gray' | 'red' | undefined {
    switch (level) {
      case LoggerLevel.TRACE:
        return 'blue';
      case LoggerLevel.DEBUG:
        return 'teal';
      case LoggerLevel.INFO:
      case LoggerLevel.LOG:
        return 'gray';
      case LoggerLevel.WARN:
      case LoggerLevel.ERROR:
        return 'red';
      case LoggerLevel.OFF:
      default:
        return 'black';
    }
  }
}
