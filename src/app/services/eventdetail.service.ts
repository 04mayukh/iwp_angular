import { Injectable } from '@angular/core';
import { EVENTS } from '../shared/events'
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';
@Injectable({
  providedIn: 'root'
})
export class EventdetailService {

  constructor(private restangular:Restangular) { }

  getEventbyId(id:any): Observable<any>{
    // console.log(EVENTS.filter((event) => (event.id === id))[0])
    // return of(EVENTS.filter((event) => (event.id === id))[0]);
    return this.restangular.one('api/events/event-id/'+ id).get();
  }

  getEvents(): Observable<any>{
    return this.restangular.one('api/all/events').get();;;
  }

  getEventsByChapter(id:number): Observable<any>{
    return this.restangular.one('api/events/organization-id/'+ id).get()
  }

}
