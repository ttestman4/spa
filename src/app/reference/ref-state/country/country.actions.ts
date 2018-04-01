import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Country } from './country.model';

export enum CountryActionTypes {
  LoadCountries = '[Country] Load Countries',
  AddCountry = '[Country] Add Country',
  UpsertCountry = '[Country] Upsert Country',
  AddCountries = '[Country] Add Countries',
  UpsertCountries = '[Country] Upsert Countries',
  UpdateCountry = '[Country] Update Country',
  UpdateCountries = '[Country] Update Countries',
  DeleteCountry = '[Country] Delete Country',
  DeleteCountries = '[Country] Delete Countries',
  ClearCountries = '[Country] Clear Countries'
}

export class LoadCountries implements Action {
  readonly type = CountryActionTypes.LoadCountries;

  constructor(public payload: { countries: Country[] }) { }
}

export class AddCountry implements Action {
  readonly type = CountryActionTypes.AddCountry;

  constructor(public payload: { country: Country }) { }
}

export class UpsertCountry implements Action {
  readonly type = CountryActionTypes.UpsertCountry;

  constructor(public payload: { country: Update<Country> }) { }
}

export class AddCountries implements Action {
  readonly type = CountryActionTypes.AddCountries;

  constructor(public payload: { countries: Country[] }) { }
}

export class UpsertCountries implements Action {
  readonly type = CountryActionTypes.UpsertCountries;

  constructor(public payload: { countries: Update<Country>[] }) { }
}

export class UpdateCountry implements Action {
  readonly type = CountryActionTypes.UpdateCountry;

  constructor(public payload: { country: Update<Country> }) { }
}

export class UpdateCountries implements Action {
  readonly type = CountryActionTypes.UpdateCountries;

  constructor(public payload: { countries: Update<Country>[] }) { }
}

export class DeleteCountry implements Action {
  readonly type = CountryActionTypes.DeleteCountry;

  constructor(public payload: { id: string }) { }
}

export class DeleteCountries implements Action {
  readonly type = CountryActionTypes.DeleteCountries;

  constructor(public payload: { ids: string[] }) { }
}

export class ClearCountries implements Action {
  readonly type = CountryActionTypes.ClearCountries;
}

export type CountryActions =
  LoadCountries
  | AddCountry
  | UpsertCountry
  | AddCountries
  | UpsertCountries
  | UpdateCountry
  | UpdateCountries
  | DeleteCountry
  | DeleteCountries
  | ClearCountries;
