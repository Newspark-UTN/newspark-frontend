import { Component } from '@angular/core';
import { NewsService } from '../../shared/news.service.ts';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {
  mensajeEnviado: boolean = false;
  enviando: boolean = false;
  constructor(private newsService: NewsService) {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form)
    this.enviando = true;
    this.newsService.sendContact(form).subscribe(
      (result) => {
        console.log(result)
        this.mensajeEnviado = true;
      }
    )
  }
}
