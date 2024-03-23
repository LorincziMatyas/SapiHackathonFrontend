import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './services/local-storage.service';
import { NavigationEnd, Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  isLoginPage = false;
  isRegisterPage = false;
  // isUser: boolean = false;
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

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/loginUser';
        this.isRegisterPage = event.urlAfterRedirects === '/registration';
      }
    });
  }
}
