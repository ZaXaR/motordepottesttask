import { Component, OnInit} from '@angular/core';
import { ApiService } from  '../api.service';
import { Cars } from  '../cars';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})

export class CarsListComponent implements OnInit {

  public searchText : string;
  cars: Cars[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getCars()
  }

  public getCars() {
    this.apiService.getCars().subscribe(
      cars => {
        console.log(cars);
        this.cars = cars
      }
    );
  }
}
