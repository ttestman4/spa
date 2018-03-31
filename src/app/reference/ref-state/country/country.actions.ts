import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Country } from './country.model';

export enum CountryActionTypes {
  LoadCountrys = '[Country] Load Countrys',
  AddCountry = '[Country] Add Country',
  UpsertCountry = '[Country] Upsert Country',
  AddCountrys = '[Country] Add Countrys',
  UpsertCountrys = '[Country] Upsert Countrys',
  UpdateCountry = '[Country] Update Country',
  UpdateCountrys = '[Country] Update Countrys',
  DeleteCountry = '[Country] Delete Country',
  DeleteCountrys = '[Country] Delete Countrys',
  ClearCountrys = '[Country] Clear Countrys'
}

export class LoadCountrys implements Action {
  readonly type = CountryActionTypes.LoadCountrys;

  constructor(public payload: { countrys: Country[] }) {}
}

export class AddCountry implements Action {
  readonly type = CountryActionTypes.AddCountry;

  constructor(public payload: { country: Country }) {}
}

export class UpsertCountry implements Action {
  readonly type = CountryActionTypes.UpsertCountry;

  constructor(public payload: { country: Update<Country> }) {}
}

export class AddCountrys implements Action {
  readonly type = CountryActionTypes.AddCountrys;

  constructor(public payload: { countrys: Country[] }) {}
}

export class UpsertCountrys implements Action {
  readonly type = CountryActionTypes.UpsertCountrys;

  constructor(public payload: { countrys: Update<Country>[] }) {}
}

export class UpdateCountry implements Action {
  readonly type = CountryActionTypes.UpdateCountry;

  constructor(public payload: { country: Update<Country> }) {}
}

export class UpdateCountrys implements Action {
  readonly type = CountryActionTypes.UpdateCountrys;

  constructor(public payload: { countrys: Update<Country>[] }) {}
}

export class DeleteCountry implements Action {
  readonly type = CountryActionTypes.DeleteCountry;

  constructor(public payload: { id: string }) {}
}

export class DeleteCountrys implements Action {
  readonly type = CountryActionTypes.DeleteCountrys;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCountrys implements Action {
  readonly type = CountryActionTypes.ClearCountrys;
}

export type CountryActions =
 LoadCountrys
 | AddCountry
 | UpsertCountry
 | AddCountrys
 | UpsertCountrys
 | UpdateCountry
 | UpdateCountrys
 | DeleteCountry
 | DeleteCountrys
 | ClearCountrys;
