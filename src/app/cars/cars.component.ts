import {Component, OnInit} from '@angular/core';
import {CarsService} from "./cars.service";
import {Car} from "../car";

@Component({
  selector: 'app-cars',
  providers: [CarsService, Car],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  // @ts-ignore
  selectedCar: Car;
  carList: Car[];

  constructor(cars: CarsService) {
    this.carList = cars.getCarList();
  }

  ngOnInit(): void {
  }

  getCarInfo(car: Car) {
    this.selectedCar = car;
  }
}
