import { Component, OnInit } from '@angular/core';
import { PopUpService } from 'src/app/services/pop-up.service';
import { Product } from 'src/app/models/product';
import { FactoryService } from 'src/app/services/factory-service.service';
import { ProductService } from 'src/app/services/product.service';
import { CompaniesService } from 'src/app/services/companies.service';
import { Factory } from 'src/app/models/factory';

export interface Data {
  what: string;
  cost: number;
}

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss'],
})
export class FactoryComponent implements OnInit {
  //HARDCODED DATA
  tableElements: Product[] = [
    {
      name: 'Cipo',
      making_cost: 75,
      quantity: 1000,
      unit_price: 45,
      description: '',
      factory_id: 1,
    },
    {
      name: 'Cipo2',
      making_cost: 75,
      quantity: 1000,
      unit_price: 45,
      description: '',
      factory_id: 1,
    },
    {
      name: 'Cipo3',
      making_cost: 75,
      quantity: 1000,
      unit_price: 45,
      description: '',
      factory_id: 1,
    },
  ];

  // tableElements: Factory[] = [];

  data: Data[] = [
    { what: 'Material', cost: 100000 },
    { what: 'Labor', cost: 58080 },
    { what: 'Factory Bulah', cost: 20000 },
  ];

  chartOptions: any = {
    animationEnabled: true,

    title: {
      text: 'Total costs:' + this.calculateTotalCost() + ' $',
    },
    data: [
      {
        type: 'pie',
        startAngle: 90,
        indexLabel: '{name}: {y}',
        indexLabelPlacement: 'inside',
        dataPoints: [],
      },
    ],
  };

  constructor(
    private popUp: PopUpService,
    private factoryService: FactoryService,
    private productService: ProductService,
    private companyService: CompaniesService
  ) {}

  ngOnInit(): void {
    // this.companyService.getFactoriesByCompany(1).subscribe({
    //   next: (result) => {
    //     this.tableElements = result;
    //   },
    // });

    this.chartOptions.data[0].dataPoints = [];
    this.data.forEach((item) => {
      this.chartOptions.data[0].dataPoints.push({
        y: item.cost,
        name: item.what,
      });
    });
  }

  calculateTotalCost(): number {
    return this.data.reduce((total, item) => total + item.cost, 0);
  }
  addFactory() {
    this.popUp
      .openEditPrompt(
        'Are you sure you want to buy another factory.This will cost you 50000$',
        'Question'
      )
      .then((confirmed) => {
        if (confirmed) {
          this.factoryService.addFactory().subscribe({
            next: (response) => {
              console.log('Response:', response);
              // Handle response here
            },
            error: (error) => {
              console.error('Error:', error);
              // Handle error here
            },
          });
          console.log('Hurra you have another factory');
        } else {
          console.log('Ooops you dont have another company');
        }
      });
  }
  openFactoryList() {
    this.popUp.openEditPromptTable(this.tableElements, 'Factories');
  }
}
