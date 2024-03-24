import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factory } from '../models/factory';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  apiUri = 'http://127.0.0.1:5000/';
  constructor(private http: HttpClient) {}
  // addFactoryToCompany(id: number, data: Factory) {
  //   const url = this.apiUri + '/api/factory-company/' + id;
  //   return this.http.post(url, data);
  // }
  getFactoriesByCompany(id: number) {
    const url = this.apiUri + '/api/factory-company/';
    return this.http.get<Factory[]>(url);
  }
}
