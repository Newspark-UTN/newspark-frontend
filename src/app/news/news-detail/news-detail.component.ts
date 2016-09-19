import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../shared/news.class';
import { Subscription } from 'rxjs/Rx';
import { NewsService } from '../../shared/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styles: []
})
export class NewsDetailComponent implements OnInit, AfterViewInit{

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

  ngAfterViewInit() {
    var d = document, s = d.createElement('script');
    s.src = '//newspark-com-ar.disqus.com/embed.js';
    s.setAttribute('data-timestamp', '' + new Date());
    (d.head || d.body).appendChild(s);

    var os = d.createElement('script');
    os.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-57dffeff9b581af2';
    (d.head || d.body).appendChild(os);
  }

}
