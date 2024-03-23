import { Component } from '@angular/core';

export interface Data {
  what: string;
  cost: number;
}

@Component({
  selector: 'app-financialreportpage',
  templateUrl: './financialreportpage.component.html',
  styleUrls: ['./financialreportpage.component.scss'],
})
export class FinancialreportpageComponent {
  financialData: { what: string; cost: number; quantity: number }[] = [];
  pieChartOptions: any;
  lineChartOptions: any;
  showPieChartFlag: boolean = false;
  showLineChartFlag: boolean = false;

  constructor() {
    this.generateFinancialData();
    this.generatePieChart();
    this.generateLineChart();
  }

  generateFinancialData(): void {
    const categories = [
      'Salary',
      'Rent',
      'Utilities',
      'Office Supplies',
      'Advertising',
      'Equipment',
      'Insurance',
      'Travel',
      'Repairs',
      'Legal Fees',
      'Taxes',
      'Consulting',
      'Marketing',
      'Training',
      'Software',
    ];

    for (let i = 0; i < categories.length; i++) {
      const cost = Math.floor(Math.random() * 1000) + 1; // Random cost between 1 and 1000
      const quantity = Math.floor(Math.random() * 10) + 1; // Random quantity between 1 and 10

      this.financialData.push({
        what: categories[i],
        cost: cost,
        quantity: quantity,
      });
    }
  }

  generatePieChart(): void {
    const dataPoints = [];
    for (let item of this.financialData) {
      dataPoints.push({ y: item.cost, name: item.what });
    }

    this.pieChartOptions = {
      animationEnabled: true,
      title: {
        text: 'Financial Report Chart',
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          legendText: '{name}',
          indexLabel: '{name}: {y}',
          dataPoints: dataPoints,
        },
      ],
    };
  }
  generateLineChart(): void {
    const dataPoints2 = [];
    for (let item of this.financialData) {
      dataPoints2.push({ y: item.cost, name: item.what });
    }

    this.lineChartOptions = {
      animationEnabled: true,
      title: {
        text: 'Financial Report Chart',
      },
      data: [
        {
          type: 'line',
          showInLegend: true,
          legendText: '{name}',
          indexLabel: '{name}: {y}',
          dataPoints: dataPoints2,
        },
      ],
    };
  }

  calculateTotalCost(): number {
    let totalCost = 0;
    for (let item of this.financialData) {
      totalCost += item.cost * item.quantity;
    }
    return totalCost;
  }

  showPieChart(): void {
    this.showPieChartFlag = !this.showPieChartFlag;
  }
  showLineChart(): void {
    this.showLineChartFlag = !this.showLineChartFlag;
  }
}
