export interface Stock {
  id: number;
  company_id: number;
  company_name: string;
  stock_number: number;
  stock_price: number;
  stock_prices: number[];
}

export interface StockLogs {
  id: number;
  stock_id: number;
  stock_price: number;
  date: Date;
}

export interface Company {
  id: number;
  name: string;
  description: string;
  budget: number;
}

