import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../shared/news.class';

@Component({
  selector: 'app-news-list-item',
  templateUrl: './news-list-item.component.html',
  styles: []
})

export class NewsListItemComponent implements OnInit {
  @Input("news-item") newsItem: News;

  constructor() { }

  ngOnInit() {
  }

}
