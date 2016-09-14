import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../shared/news.class';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styles: []
})
export class NewsDetailComponent implements OnInit {

  newsItem : News;
  
  constructor( private activeRoute: ActivatedRoute ) { 
    activeRoute.params.subscribe(
      
    );
  }

  ngOnInit() {
  }

}
