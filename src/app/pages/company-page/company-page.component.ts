import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-page',
  templateUrl: './company-page.component.html',
  styleUrls: ['./company-page.component.scss'],
})
export class CompanyPageComponent implements OnInit {
  budget: number = 1000;
  leasedFactory: any[] = ['Ching Chong Factory'];
  ownedFactory: any[] = [
    'Abracadabra Harware Factory',
    'Abracadabra Software Factory',
    'Abracadabra Electronics Factory',
    'Abracadabra Cube Factory',
  ];
  Products: any[] = [
    "Rubik's Cube",
    'Mechanical Keyboard',
    'Smart Watch',
    'Smart Phone',
    'Laptop',
  ];
  ownedStocks: any[] = [
    'Owning 10 Amazon Stocks',
    'Owning 20 Google Stocks',
    'Owning 30 Tesla Stocks',
  ];
  profit: number = 102873;

  constructor() {}

  ngOnInit() {
    console.log('Company Page');
  }
}
