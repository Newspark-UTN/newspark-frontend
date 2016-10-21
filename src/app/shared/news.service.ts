import { Injectable } from '@angular/core';
import { News } from './news.class';
import { Http, URLSearchParams, Jsonp, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';



@Injectable()
export class NewsService {
  private headers = new Headers({ 'Content-Type': 'application/json' });

  fetchedNews: News[];
  baseUrl: string = "http://api.newspark.com.ar:8080";

  constructor(private http: Http, private jsonp: Jsonp) { }

  getNews(): Observable<News[]> {
    return this.http.get(this.baseUrl + '/news')
      .map((data) => data.json());
  }

  getNewsById(_id: String): Observable<News> {
    return this.http.get(this.baseUrl + '/news/' + _id)
      .map((data) => data.json());
  }

  getNewsByCategory(category: string): Observable<News[]> {
    let params = new URLSearchParams();
    params.set('category', category);
    return this.http.get(this.baseUrl + '/news' + '?category=' + category)
      .map((data) => data.json());
  }

  sendContact(info: any) {
    console.log(info);

    return this.http.post(this.baseUrl + '/contact', JSON.stringify(info), { headers: this.headers });
  }

  /* save: function(todo) {
     return $http.post('/api/v1/todo', todo);
   },
  
   update: function(todo) {
     return $http.put('/api/v1/todo/' + todo._id, todo);
   },
  
   delete: function(id) {
     return $http.delete('/api/v1/todo/' + id);
   }*/

}
