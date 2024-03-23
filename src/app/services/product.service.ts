import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUri = 'http://127.0.0.1:5000';

  constructor(private http: HttpClient) {}

  getProductById(id: number) {
    const url = this.apiUri + '/api/products/' + id;
    return this.http.get<Product>(url);
  }
}
