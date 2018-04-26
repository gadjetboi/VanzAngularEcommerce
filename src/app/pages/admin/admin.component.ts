import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-component',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public toggleNav: string;

  constructor() { }

  ngOnInit() {
    this.toggleNav = 'products';
  }

  changeNav(selectedNav: string) {
    this.toggleNav = selectedNav;
  }
}
