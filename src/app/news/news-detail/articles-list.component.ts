import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styles: []
})
export class ArticlesListComponent implements OnInit {
  @Input() newsItem: any;
  constructor() { }

  ngOnInit() {
  }
}
