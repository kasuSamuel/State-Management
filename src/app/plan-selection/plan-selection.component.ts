import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { selectPlan, setStep, togglePricing } from '../store/form.actions';
import { Store } from '@ngrx/store';
import { selectIsYearly, selectSelectedPlan } from '../store/form.selectors';

@Component({
  selector: 'app-plan-selection',
  standalone: true,

  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent {
  selectedOption: any | null = null;
  isYearly: boolean = false;
    
  constructor(private router: Router, private store: Store){
     this.store.select(selectIsYearly ).subscribe((yearly) => {
      if(yearly) {
        this.isYearly = yearly;
      }
      })
  }

  ngOnInit(): void {

    this.selectedOption = 0;
    this.store.select(selectSelectedPlan).subscribe((selectedPlan) => {
      if(selectedPlan) {
        this.selectedOption = selectedPlan;
      }
    })

    sessionStorage.setItem('selectedPlan', JSON.stringify({
      selectedOption: this.selectedOption, 
      selectedPlanName: this.pricingOptions[0].name, 
      isYearly: this.isYearly,
      selectedPrice: this.isYearly ? this.pricingOptions[this.selectedOption].yearly : this.pricingOptions[this.selectedOption].monthly,

    }));
    
  }
  pricingOptions = [
    { 
      name: 'Arcade', 
      icon: '../assets/images/icon-arcade.svg', 
      monthly: '$9/mo', 
      yearly: '$90/yr'
    },
    { 
      name: 'Advanced', 
      icon: '../assets/images/icon-advanced.svg', 
      monthly: '$12/mo', 
      yearly: '$120/yr'
    },
    { 
      name: 'Pro', 
      icon: '../assets/images/icon-pro.svg', 
      monthly: '$15/mo', 
      yearly: '$150/yr'
    }
  ]; 


  goToNextPage() {
    this.router.navigate(['/pick-add-ons']);
        this.store.dispatch(setStep({ step: 3 }));
    
  }

  goBack() {
    this.router.navigate(['/personal-infor']);
        this.store.dispatch(setStep({ step: 1 }));
    
  }

   // Track selected option

  // Method to handle option selection
  handleOptionClick(index: number): void {
    this.selectedOption = (this.selectedOption === index) ? null : index;
    
    const selectedPlan = this.pricingOptions[index];
    const selectedPlanName = selectedPlan.name;
    
    const selectedPrice = this.isYearly ? selectedPlan.yearly : selectedPlan.monthly;

    this.store.dispatch(selectPlan({ planName: selectedPlan.name, isYearly: this.isYearly, planPrice: this.isYearly ? selectedPlan.yearly : selectedPlan.monthly }));
    
    console.log(selectedPlanName, selectedPrice);
  
    // Save selected option and pricing details in sessionStorage
    sessionStorage.setItem('selectedPlan', JSON.stringify({
      selectedPlanName,
      selectedPrice,
      selectedOption: this.selectedOption,
      isYearly: this.isYearly
    }));
  }
  
  

togglePricing() {
this.store.dispatch(togglePricing({ isYearly: !this.isYearly }));
}



  

}
