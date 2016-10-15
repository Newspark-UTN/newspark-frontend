import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from '../../shared/news.class';
import { NewsService } from '../../shared/news.service';
import { MasonryOptions } from 'angular2-masonry';

@Component({
    selector: 'app-news-list',
    templateUrl: './news-list.component.html',
    styles: [`.section.add.inner-add{
    margin:5%;
  }
  .section-title{
    color: #d80027;
  }
  .masonry-grid{
    opacity:0;
    transition: opacity 1s ease-in;
    -moz-transition: opacity 1s ease-in;
    -webkit-transition: opacity 1s ease-in;
  }

  .show{
    opacity: 1 !important;
  }
  `]
})
export class NewsListComponent implements OnInit {
    gridReady: boolean = false;

    newsList: News[] = [];
    category: string = null;
    // Options
    options: MasonryOptions = {
        transitionDuration: '0.4s',
        resize: true,
        initLayout: false
    }

    constructor(private newsService: NewsService, private activeRoute: ActivatedRoute) {

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

    loadNews() {
        if (this.category) {
            this.newsService.getNewsByCategory(this.category).subscribe(
                (data) => {
                    this.newsList = data
                }
            );
        } else {
            this.newsService.getNews().subscribe(
                (data) => this.newsList = data
            );
        }

    }

    layoutReady() {
        this.gridReady = true;
    }

}