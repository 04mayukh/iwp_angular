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
        name:"Mayukh",
        attended: true
      },
      {
        _id:"two",
        name:"Anant",
        attended: false
      },
      {
        _id:"three",
        name:"Queenie",
        attended: true
      },
      {
        _id:"four",
        name:"Kriti",
        attended: true
      },
      {
        _id:"five",
        name:"Ankit",
        attended: false
      },
      {
        _id:"six",
        name:"Raghu",
        attended: true
      },
      {
        _id:"seven",
        name:"Harshit",
        attended: true
      }
    ]
    return  of(x);
}


}
