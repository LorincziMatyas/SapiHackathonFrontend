import { Component } from '@angular/core';

@Component({
  selector: 'app-bank-page',
  templateUrl: './bank-page.component.html',
  styleUrls: ['./bank-page.component.scss'],
})
export class BankPageComponent {
  balance: number = 10200;
  loanAmount: number = 0;
  interestRate: number = 0.05;
  timeElapsed: number = 0;
  totalTime: number = 10; // in seconds
  loanRepaid: boolean = false;

  constructor() {}

  takeLoan(): void {
    this.balance -= this.loanAmount;
    // Simulate loan repayment over time
    const timer = setInterval(() => {
      this.timeElapsed++;
      if (!this.loanRepaid) {
        this.calculateInterest();
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  calculateInterest(): void {
    const interestAmount = this.loanAmount * this.interestRate;
    this.loanAmount += interestAmount;

    if (this.loanAmount > this.balance) {
      console.log('Loan amount exceeds balance. You went bankrupt!');
    }
  }

  repayLoan(): void {
    this.balance -= this.loanAmount;
    this.loanAmount = 0;
    this.loanRepaid = true;
  }
}
