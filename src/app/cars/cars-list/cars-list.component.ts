import {Component, OnInit, ViewChild} from '@angular/core';
import {Car} from "../models/car";
import {TotalCostComponent} from "../total-cost/total-cost.component";
import {CarsService} from "../cars.service";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'cs-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less']
})
export class CarsListComponent implements OnInit {
  @ViewChild("totalCostRef") totalCostRef!: TotalCostComponent
  totalCost: number = 0;
  grossCost: number = 0;
  cars: Array<Car> = [];
  carForm!: FormGroup;

  constructor(private carsService: CarsService,
              private router: Router,
              private formBuilder: FormBuilder
              ) {
  }

  ngOnInit(): void {
    this.loadCars();
    this.carForm = this.buildCarForm();
  }
  buildCarForm() {
    return this.formBuilder.group({
      model: ['', Validators.required],
      type: '',
      plate: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(7)]],
      deliveryDate: ['', Validators.required],
      deadline: ['', Validators.required],
      color: '',
      power: '',
      clientFirstName: ['', Validators.required],
      clientSurname: ['', Validators.required],
      cost: '',
      isFullyDamaged: '',
      year:''
    });
  }


  loadCars() : void {
    this.carsService.getCars().subscribe((cars) => {
      this.cars = cars;
      this.countTotalCost();
    });
  }

  showGross(): void {
    this.totalCostRef.showGross();
  }

  countTotalCost(): void {
    if (this.cars.length === 0) {
      return;
    }
    this.totalCost = this.cars
      .map((car) => car.cost)
      .reduce((totalCost, carCost) => totalCost + carCost);
  }

  onShownGross(grossCost: number): void {
    this.grossCost = grossCost;
  }

  goToCarDetails(car: Car) {
    this.router.navigate(['/cars', car.id]);
  }

  addCar() {
    this.carsService.addCar(this.carForm.value).subscribe(() =>{
      this.loadCars();
    })
  }



}
