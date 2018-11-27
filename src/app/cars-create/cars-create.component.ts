import { Component, OnInit } from '@angular/core';
import { Cars } from "../cars";
import { ApiService } from "../api.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-cars-create',
  templateUrl: './cars-create.component.html',
  styleUrls: ['./cars-create.component.css']
})
export class CarsCreateComponent {

  Cars = new Cars();
  submited = false;

  constructor(private ApiService: ApiService, private location: Location) { }

  newCar(): void {
    this.submited = false;
    this.Cars = new Cars();
  }

  private save():void {
    this.ApiService.addCar(this.Cars).subscribe();
  }

  addCar(): void {
    this.submited = true;
    this.save();
  }

  goBack(): void {
    this.location.back();
  }
}
