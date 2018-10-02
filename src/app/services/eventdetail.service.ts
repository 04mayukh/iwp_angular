import { Injectable } from '@angular/core';
import { EVENTS } from '../shared/events'
import { Observable, of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class EventdetailService {

  constructor() { }

  getEventbyId(id:number): Observable<any>{
    return of(EVENTS.filter((event) => (event.id === id))[0]);
  }

  getEvents(): Observable<any>{
    return of(EVENTS);
  }

  getEventsByChapter(id:number): Observable<any>{
    return of(EVENTS.filter((event) => (event.org_id === id)));
  }
}
