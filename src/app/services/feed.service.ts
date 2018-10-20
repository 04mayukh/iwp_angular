import { Injectable } from '@angular/core';
import { EVENTS } from '../shared/events'
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private restangular:Restangular) { }

  getFeed(): Observable<any[]>{
        return  this.restangular.one('api/posts/view-post').get();
  }

}
