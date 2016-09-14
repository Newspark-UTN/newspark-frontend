import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: []
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  constructor() { }

  ngOnInit() {
  }

}
