import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefStateModule } from './ref-state/ref-state.module';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    RefStateModule,
    WidgetsModule
  ],
  exports: [
    WidgetsModule
  ],
  declarations: []
})
export class ReferenceModule { }
