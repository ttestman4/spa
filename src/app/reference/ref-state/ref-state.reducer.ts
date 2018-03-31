import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromCountry from './country/country.reducer';

export interface State {
  country: fromCountry.State;
}

export const reducers: ActionReducerMap<State> = {
  country: fromCountry.reducer,
};

const selectCountryState = createFeatureSelector<fromCountry.State>('country');

export const selectCountryIds = createSelector(selectCountryState, fromCountry.selectIds);
export const selectCountryEntities = createSelector(selectCountryState, fromCountry.selectEntities);
export const selectAllCountries = createSelector(selectCountryState, fromCountry.selectAll);
export const selectCountryTotal = createSelector(selectCountryState, fromCountry.selectTotal);
