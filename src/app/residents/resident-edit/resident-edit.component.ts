import { Component,  OnInit,ElementRef } from '@angular/core';
import { ActivatedRoute,Router, ParamMap  } from '@angular/router';
import { Observable,switchMap } from 'rxjs';
import Resident from '../Resident';
import { ResidentService } from '../resident.service';


@Component({
  selector: 'app-resident-edit',
  templateUrl: './resident-edit.component.html',
  styleUrls: ['./resident-edit.component.css']
})
export class ResidentEditComponent implements OnInit {

  resident: Observable<Resident>;
  

  constructor( private service:ResidentService,private router: Router,private route:ActivatedRoute,private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.resident = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getResident(params.get('id')))
    );
  }
  
  getResidentStatus(status:string){
    if(status == "A"){
      status = "Single"
    }
    if(status == "B"){
      status = "Married"
    }
    if(status == "C"){
      status = "Divorced"
    }
    if(status == "D"){
      status = "Widow(er)"
    }
    return status;
  }
  
  getResidentSex(sex:boolean):string{
    let k:string;
    if(sex == true){
      k = "Male"
    }
    if(sex == false){
      k = "Female"
    }
    return k;
  }

  goBack() {
    this.router.navigate(['/residents']);
  }
}
