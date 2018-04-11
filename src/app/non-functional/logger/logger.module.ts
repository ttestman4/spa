import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { LoggerConfig } from './logger-config';
import { LoggerConfigService } from './logger-config.service';
import { LoggerHttpService } from './logger-http.service';
export { LoggerConfig } from './logger-config';
export { LoggerLevel } from './logger-level.enum';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LoggerConfig, LoggerService, LoggerConfigService, LoggerHttpService]
})
export class LoggerModule { }
