import { Component, OnInit } from '@angular/core';
import Resident from './Resident';
import { ResidentService } from './resident.service';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent implements OnInit {
  
  residents: Resident[]=[]

  constructor(private service: ResidentService) { }
  
  ngOnInit(): void {
    this.getResidents();
  }
  getResidents():void{
    this.service.getResidents().subscribe((resident) => (this.residents = resident))
  }

  getResident(id:string | number){
    let r:Resident;
    this.service.getResident(id).subscribe((resident) =>(r=resident))
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
  getResidentSex(sex:string){
    if(sex == "true"){
      sex = "Male"
    }
    if(sex == "false"){
      sex = "Female"
    }
    return sex;
  }

  getResidentStartDate(StartDate:number){
    var now = new Date();
    let years = now.getFullYear() - StartDate;
    return years;

  }

}
