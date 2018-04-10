import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggerService } from './logger.service';
import { LoggerConfigService } from './logger-config.service';
import { LoggerHttpService } from './logger-http.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [LoggerService, LoggerConfigService, LoggerHttpService]
})
export class LoggerModule { }
