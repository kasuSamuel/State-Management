import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setPersonalInfo, setStep } from '../store/form.actions';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { selectPersonalInfo } from '../store/form.selectors';
@Component({
  selector: 'app-personal-infor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './personal-infor.component.html',
  styleUrls: ['./personal-infor.component.css'],
  
})
export class PersonalInforComponent {
  formData: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private store: Store) {
  

    this.formData = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.store.select(selectPersonalInfo).subscribe((personalInfo) => {
      if(personalInfo) {
      this.formData.patchValue(personalInfo);
      }
      console.log(personalInfo);
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

    const { name, email, phone } = this.formData.value;
    this.store.dispatch(setPersonalInfo({ name, email, phone }));
    this.store.dispatch(setStep({ step: 2 }));
    this.router.navigate(['/plan-selection']);
  }

  goToNextPage() {
    this.onSubmit();
    console.log(this.formData.value);
    this.store.dispatch(setStep({ step: 4 }));

  }
}
