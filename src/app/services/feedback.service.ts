import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular'
import { Observable, of } from 'rxjs';
import { FEEDBACK } from '../shared/feedbacks'

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular:Restangular ) { }

  
  submitFeedback(feedback: any): Observable<any>{
    console.log(feedback);
    return of(feedback);
  };

  getFeedback(): Observable<any>{
    return of(FEEDBACK);
  }
}
