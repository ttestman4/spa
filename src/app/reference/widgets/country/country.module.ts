import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country.component';
import { NonFunctionalModule } from '../../../non-functional/non-functional.module';
import { RefStateModule } from '../../ref-state/ref-state.module';
@NgModule({
  imports: [
    CommonModule,
    NonFunctionalModule,
    RefStateModule
  ],
  declarations: [CountryComponent],
  exports: [CountryComponent]
})
export class CountryModule { }
