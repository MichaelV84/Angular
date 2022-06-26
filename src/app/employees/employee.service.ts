import { Injectable } from '@angular/core';
import { Observable, of,map } from 'rxjs';
import { EmpArray } from './demmy-data-employee';
import Employee from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees():Observable<Employee[]>{
    return of (EmpArray)
  }

  getEmployee(id:string | number) :Observable<Employee>{
    return this.getEmployees().pipe(
      map((employees:Employee[]) => employees.find((e) => e.Id==id))
    )
  }
  
}
