import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
brand = 'Angular 4.x Material';
nav1 = 'Portfolio';
nav2 = 'Contact';
nav3 = 'About';

  constructor() { }

  ngOnInit() {
  }

}
