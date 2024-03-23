import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { ProductService } from 'src/app/services/product.service';

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
  constructor(private productService: ProductService) {}
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

  calculateTotalCost(): number {
    return this.data.reduce((total, item) => total + item.cost, 0);
  }

  ngOnInit(): void {
    this.productService.getProuctById(1).subscribe({
      next: (response) => {
        console.log('this.productService.getProuctById(1): ', response);
      },
    });

    this.chartOptions.data[0].dataPoints = [];
    this.data.forEach((item) => {
      this.chartOptions.data[0].dataPoints.push({
        y: item.cost,
        name: item.what,
      });
    });
  }
}
