import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCurrentStep } from './store/form.selectors';
import { setStep } from './store/form.actions';

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
  constructor(private router: Router, private store: Store) {

  this.store.select(selectCurrentStep).subscribe((step) => {
    this.activeStep = step;
  })

  }

  goToPersonalInfor() {
this.store.dispatch(setStep({ step: 1 }));
    this.router.navigate(['/personal-infor']);
  }

  goToPlanSelection() {
    this.router.navigate(['/plan-selection'])
    // Set the active step to 1
    this.store.dispatch(setStep({ step: 2 }));
    // Navigate to the personal information page
    sessionStorage.clear();
    console.log("kasu");


  }
  goToPickAddons() {
    this.router.navigate(['/pick-add-ons']);
    this.store.dispatch(setStep({ step: 3 }));

  }
  goToFinishingup() {
    this.router.navigate(['/finishing-up']);
    this.store.dispatch(setStep({ step: 4 }));

  }


}
