import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Cars } from  './cars';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private carUrl = 'http://127.0.0.1:3000/api/cars';  // URL to web api

  constructor(private http: HttpClient) {}

  getCars (): Observable<Cars[]> {
    return this.http.get<Cars[]>(this.carUrl)
  }

  getCar(id: number): Observable<Cars> {
    const url = `${this.carUrl}/${id}`;
    return this.http.get<Cars>(url);
  }
  addCar (car: Cars): Observable<any> {
    console.log(car);
    return this.http.post<any>(this.carUrl, car, httpOptions);
  }
  updateCar (car: Cars): Observable<any> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carUrl}/${id}`;
    return this.http.put(url, car, httpOptions);
  }
  deleteCar (car: Cars | number): Observable<Cars> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carUrl}/${id}`;
    return this.http.delete<Cars>(url, httpOptions);
  }
}
