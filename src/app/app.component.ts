import { Component } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  constructor(private localStorageService: LocalStorageService) {}

  saveUserData(): void {
    const userData = {
      username: 'john_doe',
      email: 'john@example.com',
      company_id: 1,
    };
    this.localStorageService.saveData('userData', userData);
  }

  loadUserData(): any {
    return this.localStorageService.loadData('userData');
  }

  deleteUserData(): void {
    this.localStorageService.deleteData('userData');
  }
}
