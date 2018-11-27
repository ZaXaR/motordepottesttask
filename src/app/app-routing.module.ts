import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsListComponent }  from './cars-list/cars-list.component';
import { CarsDetailComponent }  from './cars-detail/cars-detail.component';
import { CarsCreateComponent } from "./cars-create/cars-create.component";
import { CarsEditComponent } from "./cars-edit/cars-edit.component";
import { CarsDeleteComponent } from "./cars-delete/cars-delete.component";

const routes: Routes = [
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  {
    path: 'cars',
    component: CarsListComponent,
    data: { title: 'Cars List' }
  },
  {
    path: 'car/:id',
    component:  CarsDetailComponent,
    data: { title: 'Car Detail' }
  },
  {
    path: 'cars/create',
    component: CarsCreateComponent,
    data: { title: 'Car Create' }
  },
  {
    path: 'cars/edit',
    component: CarsEditComponent,
    data: { title: 'Car Edit' }
  },
  {
    path: 'cars/delete',
    component:CarsDeleteComponent,
    data: { title: 'Car Delete' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
