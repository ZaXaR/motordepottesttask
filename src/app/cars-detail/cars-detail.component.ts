import { Component, OnInit } from '@angular/core';
import { Cars} from "../cars";
import { ApiService } from "../api.service";
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-cars-detail',
  templateUrl: './cars-detail.component.html',
  styleUrls: ['./cars-detail.component.css']
})
export class CarsDetailComponent implements OnInit {

  Cars = new Cars();
  submited = false;
  message: string;

  constructor( private ApiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ApiService.getCar(id).subscribe(Cars => this.Cars = Cars);
  }

  update(): void {
    this.submited = true;
    this.ApiService.updateCar(this.Cars).subscribe(() => this.message = "Car updated");
  }

  delete(): void {
    this.submited = true;
    this.ApiService.deleteCar(this.Cars.id).subscribe(() => this.message = "Car delet");
  }
  goBack(): void {
    this.location.back();
  }
}
