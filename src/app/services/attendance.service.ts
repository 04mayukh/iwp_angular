import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor(private restangular:Restangular) { }

  getUsersByEvent(id): Observable<any[]>{
    const x: any[]=[
      {
        _id:"one",
        name:"Mayukh"
      },
      {
        _id:"two",
        name:"Anant"
      },
      {
        _id:"three",
        name:"Queenie"
      },
      {
        _id:"four",
        name:"Kriti"
      },
      {
        _id:"five",
        name:"Ankit"
      },
      {
        _id:"six",
        name:"Raghu"
      },
      {
        _id:"seven",
        name:"Harshit"
      }
    ]
    return  of(x);
}


}
