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

}
