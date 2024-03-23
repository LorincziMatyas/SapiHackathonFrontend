import { Component, OnInit } from '@angular/core';
import { Company, Stock, StockLogs } from 'src/app/models/stock';
import { StockService } from 'src/app/services/stock.service';
import { forkJoin } from 'rxjs';

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

  myCompany: Company = {} as Company;
  compbudget: number = 1000;
  money: number = 0;
  myStocks: Stock[] = [];

  chartOptions: any = {
    scales: {
      xAxes: [
        {
          time: {
            unit: 'day', // Adjust unit as needed (e.g., 'month', 'year')
          },
        },
      ],
    },
  };

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
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  viewLiveStocks(): void {
    const intervalId = setInterval(this.updateStockLogs, 10000);
  }

  updateStockLogs(): void {
    this.service.getStockLogs().subscribe({
      next: (value) => {
        this.stockLogs = value;
        this.processData();
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
      },
    });
  }

  processData(): void {
    this.data = [];

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
      }
    }

    /////////////////////////////////////
  }

  sellStock(stock: Stock): void {
    const price = stock.stock_price;
    if (this.myStocks.includes(stock)) {
      this.myStocks.splice(this.myStocks.indexOf(stock), 1);

      this.compbudget += price;
      this.money -= price;
      console.log(this.myStocks);
    }

    // const company = this.companies.filter((company) => {
    //   if (company.id === this.appComponent.loadUserData().company_id) {
    //     company.budget += price;
    //   }
    // });

    // TODO: update company budget
  }

  buyStock(stock: Stock): void {
    if (this.compbudget < stock.stock_price) {
      return;
    }
    const price = stock.stock_price;
    this.compbudget -= price;
    this.money += price;
    this.myStocks.push(stock);
    console.log(this.myStocks);

    // const company = this.companies.filter((company) => {
    //   if (company.id === this.appComponent.loadUserData().company_id) {
    //     if (company.budget >= price) {
    //       company.budget -= price;
    //     }
    //   }
    // });

    // TODO: update company budget
  }
}
