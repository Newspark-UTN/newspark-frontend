import { Injectable } from '@angular/core';
import { News } from './news.class';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
 
import 'rxjs/Rx';



@Injectable()
export class NewsService {

  fetchedNews: News[];


  constructor(private http: Http) { }

  getNews(): Observable<News[]> {
    return this.http.get('/assets/mock-news.json')
      .map((data) => data.json());
  }

  getNewsById(_id: String): Observable<News> {
    return this.http.get('/assets/mock-' + _id + '.json')
      .map((data) => data.json());
  }

  getNewsByCategory(category: String): Observable<News[]>{
    return this.http.get('/assets/mock-'+ category +'.json')
      .map((data) => data.json());
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
