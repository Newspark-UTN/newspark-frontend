import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../shared/news.class';
import { Subscription } from 'rxjs/Rx';
import { NewsService } from '../../shared/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styles: []
})
export class NewsDetailComponent implements OnInit {

  private suscription: Subscription;
  newsItem: News;
  constructor(private activeRoute: ActivatedRoute, private newsService: NewsService) {
    activeRoute.params.subscribe(
      (param: any) => {
        this.newsService.getNewsById(param['id']).subscribe(
          (data) => this.newsItem = data
        );

      }
    );
  }

  ngOnInit() {
  }

}
