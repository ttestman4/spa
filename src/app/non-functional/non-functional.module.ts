import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootStateModule } from './root-state/root-state.module';
import { LoggerModule } from './logger/logger.module';

@NgModule({
  imports: [
    CommonModule,
    RootStateModule,
    LoggerModule
  ],
  declarations: []
})
export class NonFunctionalModule { }
