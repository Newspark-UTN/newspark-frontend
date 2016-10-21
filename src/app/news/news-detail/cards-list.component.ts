import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styles: []
})
export class CardsListComponent implements OnInit {
  @Input() newsItem: any;
  constructor() { }

  ngOnInit() {
  }

  sortedArticles(){
    if (!this.newsItem) {
        return []
    }

    return this.newsItem.articles.sort(function(a1, a2) {
        var d1 : string = a1.articleDate
        var d2 : string = a2.articleDate

        if (d1 == d2) {
            return 0
        }
        else if (d1 > d2) {
            return -1
        }
        else {
            return 1;
        }

    });
  }

}
