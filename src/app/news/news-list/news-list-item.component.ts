import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../shared/news.class';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styles: [`
    .post{
      padding-top:0px;
      margin-bottom: 10px;
    }
  `]
})

export class NewsListItemComponent implements OnInit {
  @Input("news-item") newsItem: News;
  category: string = null;
  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit() {
       this.activeRoute.params.subscribe(
      (params) => {
        this.category = params['category'] || null;
      }
    )
  }

}
