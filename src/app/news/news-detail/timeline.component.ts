import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() newsItem: any;
  constructor() { }

  ngOnInit() {
  }

}
