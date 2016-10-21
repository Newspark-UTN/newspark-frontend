import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  @ViewChild('navbar') navbar: ElementRef;
  @ViewChild('navbarRight') navbarRight: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  closeNavbar() {
    this.navbar.nativeElement.classList.remove("in");
    this.navbarRight.nativeElement.classList.remove("in");
  }

}
