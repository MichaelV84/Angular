import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessesComponent } from './businesses/businesses.component';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventEditComponent } from './events/event-edit/event-edit.component';
import { EventsComponent } from './events/events.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResidentEditComponent } from './residents/resident-edit/resident-edit.component';
import { ResidentsComponent } from './residents/residents.component';

const routes: Routes = [
  {path: 'residents', component: ResidentsComponent},
  {path: 'index', component: HomePageComponent},
  {path: 'events', component: EventsComponent},
  {path: 'businesses', component: BusinessesComponent},
  {path: 'teachers', component:ResidentsComponent },
  {path: 'employees', component:EmployeesComponent },
  {path: 'employees/:id', component: EmployeeEditComponent },
  {path: 'residents/:id', component: ResidentEditComponent },
  {path: 'events/:eventNum', component: EventEditComponent },
  {path: '', redirectTo: '/index', pathMatch:'full'},
  {path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
