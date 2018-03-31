import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromRefState from './ref-state.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('refState', fromRefState.reducers),
  ],
  declarations: []
})
export class RefStateModule { }
