import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pick-add.component.html',
  styleUrl: './pick-add.component.css'
})
export class PickAddComponent {

  selectedPlan = { isYearly: true };

  ngOnInit() {
    const selectedPlan = sessionStorage.getItem('selectedPlan');
    if (selectedPlan) {
      try {
        this.selectedPlan = JSON.parse(selectedPlan);
      } catch (e) {
        console.error('Error parsing selectedPlan:', e);
      }
    }
  }

  constructor(private router: Router) { }
  checkboxOptions = [
    {
      id: 'online-service',
      title: 'Online service',
      description: 'Access to multiplayer games',
      month: '+$1/mo',
      year: '+$10/yr',
      checked: false,
    },
    {
      id: 'larger-storage',
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      month: '+$2/mo',
      year: '+$20/yr',
      checked: false,


    },
    {
      id: 'custom-profile',
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      month: '+$2/mo',
      year: '+$20/yr',
      checked: false,

    }
  ];


  goToNextPage() {
    this.router.navigate(['/finishing-up']);
  }
  goBack() {
    this.router.navigate(['/plan-selection']);
  }

  toggleCheckbox(option: any) {
    const checkbox = document.getElementById(option.id) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      option.checked = checkbox.checked;

      // Retrieve existing data from sessionStorage
      let data: { title: string; selectedPlanValue: string }[] = JSON.parse(sessionStorage.getItem('optionData') || '[]');

      if (checkbox.checked) {
        // Add the new object if checked
        data.push({
          title: option.title,
          selectedPlanValue: this.selectedPlan.isYearly ? option.year : option.month
        });
      } else {
        // Remove the object if unchecked
        data = data.filter((item: any) => item.title !== option.title);
      }

      console.log('datang', data);
      sessionStorage.setItem('optionData', JSON.stringify(data));
    }


  }







}
