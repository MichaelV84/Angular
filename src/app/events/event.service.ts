import { Injectable } from '@angular/core';
import { Observable,of,map } from 'rxjs';
import {eventArr} from './demmy-data-event'
import Event from './Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getEvents():Observable<Event[]>{
    return of (eventArr)
  }

  getEvent(eventNum:number | string){
    return this.getEvents().pipe(
      map((events:Event[]) => events.find((e) => e.EventNum == eventNum))
    )
  }
}
