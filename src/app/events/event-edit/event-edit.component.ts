import { Component,  OnInit ,ElementRef} from '@angular/core';
import { ActivatedRoute,Router, ParamMap  } from '@angular/router';
import { Observable,switchMap } from 'rxjs';
import Event from '../Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {

  event: Observable<Event>;

  constructor(private service:EventService,private router: Router,private route:ActivatedRoute,private elementRef:ElementRef) { }

  ngOnInit(): void {
    this.event = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.service.getEvent(params.get('eventNum')))
    );
  }

  getEventDirectorSex(sex:boolean):string{
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
    this.router.navigate(['/events']);
  }
}
