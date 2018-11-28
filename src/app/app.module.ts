import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsCreateComponent } from './cars-create/cars-create.component';
import { CarsEditComponent } from './cars-edit/cars-edit.component';
import { CarsDetailComponent } from './cars-detail/cars-detail.component';
import { CarsDeleteComponent } from './cars-delete/cars-delete.component';
import { FilterPipe } from "./filter.pipe";
import { UnicFilterPipe } from "./unic.filter.pipe";
import { SortPipe } from "./sort.pipe";
import { ChkFilterPipe } from "./chk.filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    CarsCreateComponent,
    CarsEditComponent,
    CarsDetailComponent,
    CarsDeleteComponent,
    FilterPipe,
    UnicFilterPipe,
    SortPipe,
    ChkFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
