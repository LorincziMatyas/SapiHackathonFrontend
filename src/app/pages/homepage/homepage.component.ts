import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, switchMap } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // console.log('OnInit');
    // Call this function every 5 seconds
    // interval(5000)
    //   .pipe(switchMap(() => this.getStocks()))
    //   .subscribe(
    //     (data) => {
    //       console.log('Stocks: ', data);
    //     },
    //     (error) => {
    //       console.error('Error fetching data:', error);
    //     }
    //   );
  }

  // getUsers(): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:5000/api/users');
  // }

  // getTeams(): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:5000/api/teams');
  // }

  // getCompanies(): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:5000/api/companies');
  // }

  // getStocks(): Observable<any> {
  //   return this.http.get<any>('http://127.0.0.1:5000/api/stocks');
  // }
}

/* 
    this.getUsers().subscribe(
      (data) => {
        console.log('Users:', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.getTeams().subscribe(
      (data) => {
        console.log('Teams: ', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.getCompanies().subscribe(
      (data) => {
        console.log('Companies: ', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );

    this.getStocks().subscribe(
      (data) => {
        console.log('Stocks: ', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
*/
