import { Component, OnInit } from '@angular/core';
import { News } from '../../shared/news.class';
import { NewsService } from '../../shared/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styles: []
})
export class NewsListComponent implements OnInit {
  newsList : News[];

  constructor( private newsService: NewsService ) {
    this.newsList = newsService.getNews();
   }

  ngOnInit() {
  }

}
