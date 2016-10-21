import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [` .read-more{
    cursor: pointer;
  }`]
})
export class CardComponent implements OnInit {
  @Input() article: any;
  @Input() opened: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clickReadMore() {
    this.opened = !this.opened
  }

  clickCard() {
    if (!this.opened) {
      this.opened = true
    }
  }

  paragraphs() {
    if (this.article) {
      return this.article.content.split('\n').filter(function (p) {
        return p.trim().length > 0
      })
    }
    else {
      return [];
    }
  }

}
