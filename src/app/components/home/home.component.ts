import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public myAngularxQrCode: string = null;
  public ssid = 'Harshal';
  public password = 'Raverkar';
  public str: any;

  constructor() {}

  ngOnInit(): void {
    this.str = `WIFI:T:WPA;S:${this.ssid};P:${this.password};`;
  }

  ganerateCard() {
    this.str = `WIFI:T:WPA;S:${this.ssid};P:${this.password};`;
  }
}
