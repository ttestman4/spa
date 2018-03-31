import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Country } from './country.model';
import { CountryActions, CountryActionTypes } from './country.actions';

export interface State extends EntityState<Country> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Country> = createEntityAdapter<Country>();

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

    case CountryActionTypes.AddCountrys: {
      return adapter.addMany(action.payload.countrys, state);
    }

    case CountryActionTypes.UpsertCountrys: {
      return adapter.upsertMany(action.payload.countrys, state);
    }

    case CountryActionTypes.UpdateCountry: {
      return adapter.updateOne(action.payload.country, state);
    }

    case CountryActionTypes.UpdateCountrys: {
      return adapter.updateMany(action.payload.countrys, state);
    }

    case CountryActionTypes.DeleteCountry: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CountryActionTypes.DeleteCountrys: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CountryActionTypes.LoadCountrys: {
      return adapter.addAll(action.payload.countrys, state);
    }

    case CountryActionTypes.ClearCountrys: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
