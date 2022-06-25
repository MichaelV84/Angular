import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidentsComponent } from './residents/residents.component';
import { EventsComponent } from './events/events.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { EmployeesComponent } from './employees/employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResidentEditComponent } from './residents/resident-edit/resident-edit.component'; 
import { FormsModule } from '@angular/forms';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidentsComponent,
    ResidentEditComponent,
    EventsComponent,
    EventEditComponent,
    EmployeesComponent,
    EmployeeEditComponent,
    BusinessesComponent,
    PageNotFoundComponent,
    HomePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
