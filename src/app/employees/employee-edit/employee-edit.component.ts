import { Component,  OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute,Router, ParamMap  } from '@angular/router';
import { Observable,switchMap } from 'rxjs';
import Employee from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employee:Observable<Employee>;

  constructor(private service:EmployeeService,private router:Router,private route:ActivatedRoute,private elementRef:ElementRef) { }

  ngOnInit(): void {
      this.employee = this.route.paramMap.pipe(
        switchMap((params:ParamMap)=>this.service.getEmployee(params.get('Id')))
      )
  }
  
  goBack() {
    this.router.navigate(['/employees']);
  }


}
