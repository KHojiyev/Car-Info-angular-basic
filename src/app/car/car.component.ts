import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  // @ts-ignore
 @Input() car: Car;

/*
// @ts-ignore
  Model: string = new CarsComponent().selectedCar.carMaker;
  // @ts-ignore
  Maker: string = new CarsComponent().selectedCar.carMaker;
  // @ts-ignore
  Model_Year: string = new CarsComponent().selectedCar.carModelYear;
  // @ts-ignore
  VIN: string = new CarsComponent().selectedCar.carVIN;
*/


  ngOnInit(): void {


  }


}
