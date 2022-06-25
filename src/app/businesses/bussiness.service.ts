import { Injectable } from '@angular/core';
import { Observable,of,map } from 'rxjs';
import { BussArray } from './demmy-data-bussiness';
import Bussiness from './Bussiness';

@Injectable({
  providedIn: 'root'
})
export class BussinessService {

  constructor() { }

  getBussinesses():Observable<Bussiness[]>{
    return of (BussArray)
  }
  getBussiness(bussinessNum: string|number){
    return this.getBussinesses().pipe(
      map((bussinesses : Bussiness[]) =>bussinesses.find((b) => b.BussinessNum===bussinessNum))
    )
  }

}
