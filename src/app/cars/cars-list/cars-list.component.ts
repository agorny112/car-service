import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from "../models/car";
import {TotalCostComponent} from "../total-cost/total-cost.component";

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {
  @ViewChild("totalCostRef") totalCostRef: TotalCostComponent | undefined;
  totalCost: number | undefined;
  grossCost: any;
  cars: Car[] =  [
    {
      id: 1,
      model: 'Mazda Rx7',
      plate: 'GD2121E',
      deliveryDate: '21-04-2017',
      deadline: '05-05-2016',
      client: {
        firstName: 'Jan',
        surname: 'Kowalski'
      },
      cost: 300,
      isFullyDamaged: true
    },
    {
      id: 2,
      model: 'Mercedes 124',
      plate: 'KRK2200',
      deliveryDate: '24-05-2017',
      deadline: '03-06-2016',
      client: {
        firstName: 'Michał',
        surname: 'Nowak'
      },
      cost: 1200,
      isFullyDamaged: true
    },
    {
      id: 3,
      model: 'Renault CLIO',
      plate: 'GWE22011',
      deliveryDate: '02-02-2017',
      deadline: '03-03-2017',
      client: {
        firstName: 'Beata',
        surname: 'Dampc'
      },
      cost: 2800,
      isFullyDamaged: true
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.countTotalCost();
    console.log(this.totalCost)
  }
  showGross(): void {
    this.totalCostRef?.showGross();
  }
  countTotalCost(): void {
    this.totalCost = this.cars
      .map((car) =>car.cost)
      .reduce((totalCost, carCost) => totalCost + carCost)
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }
}
