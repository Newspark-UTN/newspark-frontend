import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent {

  constructor() {
  }
  
  onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
  }
}
