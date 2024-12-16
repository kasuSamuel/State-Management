import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { PersonalInforComponent } from './personal-infor/personal-infor.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { PickAddComponent } from './pick-add/pick-add.component';
import { CommonModule } from '@angular/common';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PersonalInforComponent,PlanSelectionComponent,PickAddComponent,FinishingUpComponent,ThankYouPageComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  activeStep: number = 1; 
  totalSteps: number = 4; 
  constructor(private router: Router){
  }

  goToPersonalInfor() {
    this.activeStep = 1;
    this.router.navigate(['/personal-infor']);
  }

  goToPlanSelection(){
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
