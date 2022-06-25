import { Injectable } from '@angular/core';
import { Observable,of,map } from 'rxjs';
import { ResArray } from './demmy-data-resedents';
import Resident from './Resident';

@Injectable({
  providedIn: 'root'
})
export class ResidentService {

  constructor() { }

   getResidents():Observable<Resident[]>{
    return of (ResArray);
  }

  getResident(id:string | number){
    return this.getResidents().pipe(
      map((resdents:Resident[]) =>resdents.find((r) => r.Id === id))
    )
  }

}
