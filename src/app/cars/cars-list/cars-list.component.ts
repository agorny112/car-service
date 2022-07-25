import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from "../models/car";
import {TotalCostComponent} from "../total-cost/total-cost.component";
import {CarsService} from "../cars.service";

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {
  @ViewChild("totalCostRef") totalCostRef!: TotalCostComponent
  totalCost: number = 0;
  grossCost: number = 0;
  cars: Car[] = [];

  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.carsService.getCars().subscribe((cars:Car[]) => this.cars = cars);
    this.countTotalCost();
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    // if (this.cars.length === 0) {
    //   return;
    // }
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((totalCost, carCost) => totalCost + carCost)
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

}
