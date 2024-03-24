import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factory } from '../models/factory';

@Injectable({
  providedIn: 'root',
})
export class FactoryService {
  apiUri = 'http://127.0.0.1:5000';
  constructor(private http: HttpClient) {}
  addFactory() {
    var data: Factory = {
      name: 'Factory',
      description: 'Random',
      profit: 1,
      products: [],
    };
    const url = this.apiUri + '/api/newfactory';
    return this.http.post(url, data);
  }
  getAllFactorues() {
    const url = this.apiUri + '/api/factories';
    return this.http.get<Factory[]>(url);
  }
}
