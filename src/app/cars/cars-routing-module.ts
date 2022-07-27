import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarDetailsComponent} from "./car-details/car-details.component";

const cars_routes: Routes = [
   {path: 'cars/:id', component: CarDetailsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(cars_routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule {
}
