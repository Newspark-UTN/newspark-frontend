import { Component } from '@angular/core';
import { NewsService } from '../../shared/news.service.ts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {

  constructor(private newsService: NewsService) {
  }
  
  onSubmit(form: any): void {
    console.log('you submitted value:', form)
    this.newsService.sendContact(form)
  }
}
