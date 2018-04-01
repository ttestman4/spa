import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryModule } from './country/country.module';

@NgModule({
  imports: [
    CommonModule,
    CountryModule
  ],
  exports: [
    CountryModule
  ],
  declarations: []
})
export class WidgetsModule { }
