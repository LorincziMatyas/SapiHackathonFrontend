import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company, Stock, StockLogs } from '../models/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  constructor(private http: HttpClient) {}

  getStocks() {
    return this.http.get<Stock[]>('http://127.0.0.1:5000/api/stocks');
  }

  getStockLogs() {
    return this.http.get<StockLogs[]>('http://127.0.0.1:5000/api/stocklogs');
  }

  getCompanies() {
    return this.http.get<Company[]>('http://127.0.0.1:5000/api/companies');
  }

  getCompanyNamebyId(companyId: number) {
    return this.http.get<Company>(
      'http://127.0.0.1:5000/api/companies/' + companyId
    );
  }
}
