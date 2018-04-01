import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromReference from '../../ref-state/ref-state.module';
import { Subscription } from 'rxjs/Subscription';
import { Country } from '../../ref-state/ref-state.module';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class CountryComponent implements OnInit, OnDestroy {
  countrySubscription: Subscription;
  countries: Country[];

  constructor(private store: Store<fromReference.State>) {
    this.store.dispatch(new fromReference.LoadCountries({
      countries: [
        { id: 'us', name: 'USA' },
        { id: 'jp', name: 'JAPAN' },
      ]
    }));
  }

  ngOnInit() {
    if (this.countrySubscription === undefined) {
      this.countrySubscription = this.store.pipe(
        select(fromReference.getAllCountries)
      ).subscribe((countries) =>
        this.countries = countries);
    }
  }

  ngOnDestroy() {
    if (this.countrySubscription !== undefined) {
      this.countrySubscription.unsubscribe();
      this.countrySubscription = undefined;
    }
  }

  addCountry(id: string, name: string) {
    this.store.dispatch(new fromReference.UpsertCountry({
      country:
        {
          id: id,
          changes:
            { name: name }
        }
    }));
  }
}
