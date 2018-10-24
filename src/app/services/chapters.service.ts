import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restangular } from 'ngx-restangular';

@Injectable({
  providedIn: 'root'
})
export class ChaptersService {

  constructor(private restangular: Restangular) { }

  getChapters(): Observable<any>{
    return this.restangular.one('api/all/chapters').get();
  }

  getChapterById(id:number): Observable<any>{
    // customGET("messages", {param: "myParam"});
    return this.restangular.one('api/common/organization/'+ id).get();
  }
}
