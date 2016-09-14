import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../shared/news.class';
import { NewsService } from '../../shared/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styles: []
})
export class NewsListComponent implements OnInit {
  newsList : News[];
  category : String = null;

  constructor( private newsService: NewsService , private activeRoute: ActivatedRoute ) {
   
   }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (params) => {
        this.category = params['category'] || null;
        this.loadNews();
      }
    )

  }

  loadNews(){
    if(this.category){
      this.newsList = this.newsService.getNewsByCategory(this.category);
    }else{
      this.newsList = this.newsService.getNews();
    }
     
  }

}
