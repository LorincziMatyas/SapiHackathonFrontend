import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  // Adat mentése a localStorage-be
  saveData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Adat betöltése a localStorage-ból
  loadData(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Adat törlése a localStorage-ból
  deleteData(key: string): void {
    localStorage.removeItem(key);
  }
}
