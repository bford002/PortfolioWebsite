import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
    console.log('clicked');
  }

}
