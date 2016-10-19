import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-source-image',
  templateUrl: './source-image.component.html',
  styles: []
})
export class SourceImageComponent implements OnInit {
  @Input() source: any;
  constructor() { }

  ngOnInit() {
  }

}
