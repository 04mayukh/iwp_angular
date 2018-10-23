import { Injectable } from '@angular/core';
import { EVENTS } from '../shared/events';
import { Observable,of } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class NeweventService {
  constructor(private restangular: Restangular) { }


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

  submitEvent(data:any): Observable<any>{
    return this.restangular.all('api/organization/add-event').post(data)
  }

}
