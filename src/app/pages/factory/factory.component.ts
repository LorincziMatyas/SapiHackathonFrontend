import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

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
  data: Data[] = [
    { what: 'Material', cost: 100000 },
    { what: 'Labor', cost: 58080 },
    { what: 'Factory Bulah', cost: 20000 },
  ];

  chartOptions: any = {
    animationEnabled: true,
    theme: 'dark2',
    title: {
      text: 'Total costs:' + this.calculateTotalCost() + ' $',
    },
    data: [
      {
        type: 'pie',
        startAngle: 45,
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
    this.chartOptions.data[0].dataPoints = [];
    this.data.forEach((item) => {
      this.chartOptions.data[0].dataPoints.push({
        y: item.cost,
        name: item.what,
      });
    });
  }
}
