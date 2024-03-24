import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, switchMap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Tip {
  title: string;
  description: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private http: HttpClient) {}
  showMyCompanySetup = false;
  tips: Tip[] = [];
  randomTips: Tip[] = [];

  industries: any[] = [
    { label: 'Technology', value: 'technology' },
    { label: 'Finance', value: 'finance' },
    { label: 'Retail', value: 'retail' },
    // Add more industries as needed
  ];

  companyForm = new FormGroup({
    name: new FormControl('', Validators.required),
    industry: new FormControl('', Validators.required), // Industry added instead of address
  });

  toggleCompanySetup() {
    this.showMyCompanySetup = !this.showMyCompanySetup;
  }

  // Implement this method to handle company creation logic
  createCompany() {
    if (this.companyForm.valid) {
      // Implement logic to send company data to your backend (API call)
      console.log('Company created:', this.companyForm.value); // For now, just log to console
    }
  }

  ngOnInit(): void {
    this.http.get<Tip[]>('assets/tips.json').subscribe((data) => {
      this.tips = data;
      this.randomTips = this.getRandomTips();
    });

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

  private getRandomTips(): Tip[] {
    const shuffledTips = this.shuffleArray([...this.tips]); // Véletlenszerűen keveri a tippeket
    return shuffledTips.slice(0, 4); // Visszaadja az első 4 tippet
  }

  private shuffleArray(array: Tip[]): Tip[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  startSimulation(): void {
    // Implement the logic to start the simulation
    console.log('Simulation started!');
  }

  getUsers(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/api/users');
  }

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
