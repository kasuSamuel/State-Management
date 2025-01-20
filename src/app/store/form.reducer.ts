// src/app/store/form.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { setPersonalInfo, setStep, setPlan, setPlanStep } from './form.actions';

// Define your state interface
export interface FormState {
  personalInfo: {
     name: string; 
     email: string; 
     phone: string; 
    };
  step: number;
}


export interface PlanState {
  selected:{
    title: string;
  monthly: boolean;
  amount: number;}
  step: number;

}


export interface AddOnState {
  selected:{
    title: string;
  monthly: boolean;
  amount: number;
}
  step: number;

}

// Define initial state
export const initialState: FormState = {
  personalInfo: { name: '', email: '', phone: '' },
  step: 1
};
export const selectedPlanState: PlanState = {
  selected: {title: '', monthly: true, amount: 0},
  step: 2
};


// Create the reducer function
export const formReducer = createReducer(
  initialState,
  on(setPersonalInfo, (state, { name, email, phone }) => ({
    ...state,
    personalInfo: { name, email, phone }
  })),
  on(setStep, (state, { step }) => ({
    ...state,
    step
  }))
);


export const planReducer = createReducer(
  selectedPlanState,
    on(setPlan, (state, { title, monthly, amount }) => ({
    ...state,
    selected: { title, monthly, amount },
  })),
  on( setPlanStep , (state, { step }) => ({
    ...state,
    step,
  }))
);

