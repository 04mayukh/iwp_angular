import { Injectable } from '@angular/core';
import { Profile } from '../shared/profile';
import { PROFILE } from '../shared/profileSample';
import { UserEvent } from '../shared/userevent';
import { EVENTS } from '../shared/events';
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private restangular:Restangular) { }

  getProfile(): Observable<any> {
    return this.restangular.one('api/student/details').get();
  }

  getEvents(): Observable<any>{
    return this.restangular.one('api/student/events').get();
  } 

}
