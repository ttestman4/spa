import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Country } from './country.model';
import { CountryActions, CountryActionTypes } from './country.actions';

/**
 * @ngrx/entity provides a predefined interface for handling
 * a structured dictionary of records. This interface
 * includes an array of ids, and a dictionary of the provided
 * model type by id. This interface is extended to include
 * any additional interface properties.
 */
export interface State extends EntityState<Country> {
  // additional entities state properties
}

/**
 * createEntityAdapter creates an object of many helper
 * functions for single or multiple operations
 * against the dictionary of records. The configuration
 * object takes a record id selector function and
 * a sortComparer option which is set to a compare
 * function if the records are to be sorted.
 */
export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>({
  selectId: (country: Country) => country.id,
  sortComparer: false,
});

/**
 * getInitialState returns the default initial state
 * for the generated entity state. Initial state
 * additional properties can also be defined.
 */
export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: CountryActions
): State {
  switch (action.type) {
    case CountryActionTypes.AddCountry: {
      return adapter.addOne(action.payload.country, state);
    }

    case CountryActionTypes.UpsertCountry: {
      return adapter.upsertOne(action.payload.country, state);
    }

    case CountryActionTypes.AddCountries: {
      return adapter.addMany(action.payload.countries, state);
    }

    case CountryActionTypes.UpsertCountries: {
      return adapter.upsertMany(action.payload.countries, state);
    }

    case CountryActionTypes.UpdateCountry: {
      return adapter.updateOne(action.payload.country, state);
    }

    case CountryActionTypes.UpdateCountries: {
      return adapter.updateMany(action.payload.countries, state);
    }

    case CountryActionTypes.DeleteCountry: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CountryActionTypes.DeleteCountries: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CountryActionTypes.LoadCountries: {
      return adapter.addAll(action.payload.countries, state);
    }

    case CountryActionTypes.ClearCountries: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}
