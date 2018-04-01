import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ref-state.reducer';
export * from './country';
export * from './ref-state.selectors';
export { State } from './ref-state.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('refState', reducers),
  ],
  declarations: []
})
export class RefStateModule { }
