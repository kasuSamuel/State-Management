import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finishing-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './finishing-up.component.html',
  styleUrls: ['./finishing-up.component.css']
})
export class FinishingUpComponent implements OnInit {
  isConfirmed = false;
  plansData: any = [];
  dataTwo: any = [];
  amount: string = '';
  totalAmount: number = 0;
  sum: number = 0;
  totalSum: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.plansData = sessionStorage.getItem('optionData') ? JSON.parse(sessionStorage.getItem('optionData')!) : null;
    this.dataTwo = sessionStorage.getItem('selectedPlan') ? JSON.parse(sessionStorage.getItem('selectedPlan')!) : null;

    if (this.dataTwo) {
      this.amount = this.dataTwo.selectedPrice;
      this.totalAmount = parseFloat(this.amount.replace(/[^0-9.-]+/g, ""));
    }

    if (this.plansData) {
      this.sum = this.plansData.reduce((total: number, Data: { selectedPlanValue: string; }) => {
        // Extract the number by removing the non-numeric characters
        const numericValue = parseFloat(Data.selectedPlanValue.replace(/[^0-9.-]+/g, ""));
        return total + numericValue;
      }, 0);
    }

    this.totalSum = this.sum + this.totalAmount;
  }

  toConfirm() {
    this.router.navigate(['/thank-you']);
  }

  goBack() {
    if (sessionStorage.getItem('optionData')) {
      sessionStorage.removeItem('optionData');
    }
    this.router.navigate(['/pick-add-ons']);
  }
}