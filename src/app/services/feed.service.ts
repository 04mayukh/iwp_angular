import { Injectable } from '@angular/core';
import { EVENTS } from '../shared/events'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }

  getFeed(): Observable<any[]>{
    return of(EVENTS);
  }

}
