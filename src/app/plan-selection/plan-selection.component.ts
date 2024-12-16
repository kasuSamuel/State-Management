import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-selection',
  standalone: true,

  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './plan-selection.component.html',
  styleUrl: './plan-selection.component.css'
})
export class PlanSelectionComponent {
  selectedOption: number | null = null;
  isYearly: boolean = false;
    
  constructor(private router: Router){}

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
  }
  goBack() {
    this.router.navigate(['/personal-infor']);
  }

   // Track selected option

  // Method to handle option selection
  handleOptionClick(index: number): void {
    this.selectedOption = (this.selectedOption === index) ? null : index;
    
    const selectedPlan = this.pricingOptions[index];
    const selectedPlanName = selectedPlan.name;
    
    const selectedPrice = this.isYearly ? selectedPlan.yearly : selectedPlan.monthly;
    
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
  this.isYearly = !this.isYearly;
}



  

}
