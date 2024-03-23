import { Component, OnInit } from '@angular/core';
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
  isUser: boolean = false;
  title = 'frontend';
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLoginPage = event.urlAfterRedirects === '/loginUser';
        this.isRegisterPage = event.urlAfterRedirects === '/registration';
      }
    });
  }
}
