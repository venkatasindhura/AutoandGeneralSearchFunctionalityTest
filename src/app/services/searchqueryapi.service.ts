import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchqueryapiService {
  constructor(private httpclient: HttpClient){}
  getArticles(): Observable<any> {
   return this.httpclient.get('http://hn.algolia.com/api/v1/search?query=foo&tags=story');
  }
}

