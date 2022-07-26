import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const cars_routes: Routes = [
  // {path: 'cars/:id', component: CarDetailsComponent}
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
