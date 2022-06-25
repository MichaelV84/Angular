import { Component, OnInit } from '@angular/core';
import { BussinessService } from './bussiness.service';
import Bussiness from './Bussiness';

@Component({
  selector: 'app-businesses',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css']
})
export class BusinessesComponent implements OnInit {

  bussinesses:Bussiness[]=[]

  constructor(private service:BussinessService) { }

  ngOnInit(): void {
    this.getBussinesses();
  }
  getBussinesses():void{
    this.service.getBussinesses().subscribe((bussiness) => (this.bussinesses = bussiness))
  }

  gutBussiness(bussinessNum : string | number){
    let b:Bussiness;
    this.service.getBussiness(bussinessNum).subscribe((bussinesses) => (b=bussinesses))
  }
  changeBussinessColor(salary:number):string{
    let res:string;
    if(salary <5000) {
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
