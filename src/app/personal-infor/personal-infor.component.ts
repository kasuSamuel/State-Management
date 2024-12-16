import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-personal-infor',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './personal-infor.component.html',
  styleUrls: ['./personal-infor.component.css'],
  
})
export class PersonalInforComponent {
  formData: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }


  onSubmit() {
    if (this.formData.invalid) {
      // If form is invalid, add the 'border' class to inputs with errors
      const inputElements = document.querySelectorAll('input');
      const hiddenInputElements = document.querySelectorAll('.hidden');

      inputElements.forEach((element: any) => {
        if (element.value === '') {
          element.classList.add('border'); 
          console.log(inputElements);
        }
      });

      hiddenInputElements.forEach((element: any) => {
        element.classList.add('error-message'); 
      });
      return;
    }
    // Form is valid, navigate to the next page
    this.router.navigate(['/plan-selection']);
  }

  goToNextPage() {
    this.onSubmit();
    console.log(this.formData.value);
  }
}
