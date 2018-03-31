import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { RootEffects } from './root.effects';

describe('RootService', () => {
  const actions$: Observable<any> = Observable.create();
  let effects: RootEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RootEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(RootEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
