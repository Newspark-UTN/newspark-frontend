import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styles: [`.entry-title{
    text-transform:none !important;
  }`]
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  constructor() { }

  ngOnInit() {
  }

}
