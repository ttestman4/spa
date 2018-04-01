import { ActionReducerMap } from '@ngrx/store';
import * as fromCountry from './country/country.reducer';
import * as fromRoot from '../../non-functional/root-state/root-state.module';

export interface ReferenceState {
  country: fromCountry.State;
}

export interface State extends fromRoot.State {
  reference: ReferenceState;
}

export const reducers: ActionReducerMap<ReferenceState> = {
  country: fromCountry.reducer,
};
