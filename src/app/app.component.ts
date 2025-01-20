import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeStep: number = 1;
  totalSteps: number = 4;
  constructor(private router: Router) {
  }

  goToPersonalInfor() {
    this.activeStep = 1;
    this.router.navigate(['/personal-infor']);
  }

  goToPlanSelection() {
    this.router.navigate(['/plan-selection'])
    this.activeStep = 2;
    sessionStorage.clear();
    console.log("kasu");


  }
  goToPickAddons() {
    this.router.navigate(['/pick-add-ons']);
    this.activeStep = 3;

  }
  goToFinishingup() {
    this.router.navigate(['/finishing-up']);
    this.activeStep = 4;

  }


}
