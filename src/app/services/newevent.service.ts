import { Injectable } from '@angular/core';
import { EVENTS } from '../shared/events';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NeweventService {
  constructor() { }


  getEventsWithID(): Observable<any>{
    const event: any[] = [
        {
          event_name:"Jumble",
          _id: '1'
        },
        {
          event_name:"GPL",
          _id: '2'
        }
    ]
    return of(event)
  }
}
