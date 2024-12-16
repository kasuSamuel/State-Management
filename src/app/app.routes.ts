import { Routes } from '@angular/router';
import { PersonalInforComponent } from './personal-infor/personal-infor.component';
import { FinishingUpComponent } from './finishing-up/finishing-up.component';
import { PlanSelectionComponent } from './plan-selection/plan-selection.component';
import { PickAddComponent } from './pick-add/pick-add.component';
import { ThankYouPageComponent } from './thank-you-page/thank-you-page.component';
export const routes: Routes = [
    { path: 'personal-infor', component: PersonalInforComponent },  
    { path: 'plan-selection', component: PlanSelectionComponent },   
  { path: 'pick-add-ons', component: PickAddComponent },            
  { path: 'finishing-up', component: FinishingUpComponent },       
  { path: 'thank-you', component: ThankYouPageComponent },       
  { path: '', redirectTo: '/personal-infor', pathMatch: 'full' }   
];


export class AppRoutingModule { }
 