import { Component, OnInit } from '@angular/core';
import Employee from './Employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees:Employee[]=[]

  constructor(private service:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(){
    this.service.getEmployees().subscribe((employee) => (this.employees=employee))
  }

  getEmployee(id: string | number){
    let e:Employee;
    this.service.getEmployee(id).subscribe((employee) => (e=employee))
  }

  changeEmployerColor(numHoursPerMounth:number,salaryPerHour:number):string{
    let res:string;
    if(numHoursPerMounth*salaryPerHour <3000) {
      res= "red"
    }else{
       res= "blue";
    }
   return res
  }

  changeTextColor(str:string):string{
    if(str == "blue" || str == "red"){
      return "#dfe7ee";
    }
    return 'black'
  }
}
