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
  newsList : News[] = [];
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
    this.loadNews();
    this.newsList = [];

  }

  loadNews(){
    if(this.category){
      this.newsService.getNewsByCategory(this.category).subscribe(
        (data) => {
          this.newsList = data
        } 
      );
    }else{
      this.newsService.getNews().subscribe(
        (data) => this.newsList = data
      );
    }
     
  }

}
