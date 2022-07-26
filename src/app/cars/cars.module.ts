import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { TotalCostComponent } from './total-cost/total-cost.component';
import {SharedModule} from "../shared-module/shared.module";



@NgModule({
  declarations: [
    CarsListComponent,
    TotalCostComponent
  ],
  exports: [
    CarsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CarsModule { }
