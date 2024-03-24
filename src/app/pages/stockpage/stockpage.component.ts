import { Component, OnInit } from '@angular/core';
import { Company, Stock, StockLogs } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';
import { forkJoin } from 'rxjs';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-stockpage',
  templateUrl: './stockpage.component.html',
  styleUrls: ['./stockpage.component.scss'],
})
export class StockpageComponent implements OnInit {
  stocks!: Stock[];
  stockLogs!: StockLogs[];
  data: number[][] = [];
  companies: Company[] = [];
  chartInstances: Chart[] = [];
  // chartInstances: CanvasJS.Chart[] = [];

  myCompany: Company = {} as Company;
  compbudget: number = 1000;
  money: number = 0;
  stockQuantity: number[] = [];
  myStocks: Stock[] = [];

  chartOptions: any[] = [];

  constructor(private service: StockService) {}

  ngOnInit(): void {
    forkJoin({
      stocks: this.service.getStocks(),
      stockLogs: this.service.getStockLogs(),
      companies: this.service.getCompanies(),
    }).subscribe({
      next: (value) => {
        this.stocks = value.stocks;
        this.stockLogs = value.stockLogs;
        this.companies = value.companies;
        this.processData();
        this.stockQuantity = Array(this.stocks.length).fill(0);
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  viewLiveStocks(): void {
    this.updateStockLogs();
    setInterval(() => {
      this.updateStockLogs();
    }, 10000);
  }

  updateStockLogs(): void {
    console.log('updateStockLogs');

    this.service.getStockLogs().subscribe({
      next: (value) => {
        this.stockLogs = value;
        this.processData();
        this.updateMoneyInStocks();
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  updateMoneyInStocks(): void {
    this.money = 0;
    for (const stock of this.myStocks) {
      for (const log of this.stockLogs) {
        if (stock.id === log.stock_id) {
          stock.stock_price = log.stock_price;
        }
      }
      this.money += stock.stock_price;
    }
  }

  processData(): void {
    this.data = [];
    this.chartOptions = [];

    for (const stock of this.stocks) {
      stock.stock_prices = [];
      for (const company of this.companies) {
        if (company.id === stock.company_id) {
          stock.company_name = company.name;
        }
      }
      this.stockLogs.slice(-14);
      for (const log of this.stockLogs) {
        if (stock.id === log.stock_id) {
          stock.stock_prices = stock.stock_prices.slice(-8);
          stock.stock_prices.push(log.stock_price);
        }
      }

      if (stock.stock_prices.length > 0) {
        this.data.push([...stock.stock_prices]);
        this.chartOptions.push(this.getChartOptions(stock));
      }
    }
  }

  getChartOptions(stock: Stock): any {
    return {
      theme: 'dark2',
      axisY: {
        prefix: '$',
      },
      toolTip: {
        shared: true,
      },
      title: {
        text: `Stock price history - ${stock.company_name}`,
      },
      data: [
        {
          type: 'line',
          showInLegend: true,
          dataPoints: this.getDataPoints(stock),
        },
      ],
    };
  }

  getDataPoints(stock: Stock): any[] {
    return stock.stock_prices.map((price, index) => ({
      x: index,
      y: price,
    }));
  }

  getChartInstance(event: any, index: number): void {
    this.chartInstances[index] = event.chart;
  }

  sellStock(stock: Stock, id: number): void {
    const price = stock.stock_price;
    if (this.myStocks.includes(stock)) {
      this.myStocks.splice(this.myStocks.indexOf(stock), 1);
      this.stockQuantity[id]--;

      this.compbudget += price;
      this.money -= price;
      console.log(this.myStocks);
    }
  }

  buyStock(stock: Stock, id: number): void {
    if (this.compbudget < stock.stock_price) {
      return;
    }
    const price = stock.stock_price;
    this.compbudget -= price;
    this.stockQuantity[id]++;
    this.money += price;
    this.myStocks.push(stock);
    console.log(this.myStocks);
  }
}
