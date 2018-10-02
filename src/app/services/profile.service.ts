import { Injectable } from '@angular/core';
import { Profile } from '../shared/profile';
import { PROFILE } from '../shared/profileSample';
import { UserEvent } from '../shared/userevent';
import { EVENTS } from '../shared/events';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Observable<any> {
    return of(PROFILE);
  }

  getRegisteredEvent(): Observable<any>{
    return of(EVENTS);
  } 

  getPastEvent(): Observable<any>{
    return of(EVENTS);
  }

}
