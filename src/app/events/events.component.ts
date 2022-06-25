import { Component, OnInit } from '@angular/core';
import  Event from './Event';
import { EventService } from './event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events:Event[]=[]

  constructor(private service:EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }
  getEvents():void{
    this.service.getEvents().subscribe((event) =>(this.events=event))
  }
  
  getEvent(eventNum:number){
    let e:Event;
    this.service.getEvent(eventNum).subscribe((event) =>(e=event))
  }

  changeEventColor(pnumber:number):string{
    let res:string;
    if(pnumber>=30 && pnumber<=100) {
      return "yellow"
    }
    if(pnumber<30){
     return "red";
    }
    return "green";
  }
  changeTextColor(str:string):string{
    if(str == "green" || str == "red"){
      return "#dfe7ee";
    }
    return 'black'
  }

}
