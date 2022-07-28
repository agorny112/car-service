import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarDetailsComponent} from "./car-details/car-details.component";
import {CarResolve} from "./car-resolve.service";

const cars_routes: Routes = [
   {
     path: 'cars/:id',
     component: CarDetailsComponent,
     resolve: {car : CarResolve}
   }
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
