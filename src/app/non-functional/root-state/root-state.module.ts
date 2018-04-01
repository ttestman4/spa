import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../root-state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './root.effects';
export { State } from '../root-state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.stopStoreDebugger ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([RootEffects])
  ],
  declarations: []
})
export class RootStateModule { }
