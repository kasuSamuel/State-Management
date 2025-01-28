// src/app/store/form.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { setPersonalInfo, setStep, selectPlan, togglePricing} from './form.actions';

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
  selectedPlanName: string | null;
  selectedPrice: string | null;
  isYearly: boolean;
}

export const initialPlanState: PlanState = {
  selectedPlanName: null,
  selectedPrice: null,
  isYearly: false,
};

export interface AddOnState {
  selected: {
    title: string;
    monthly: boolean;
    amount: number;
  };
  step: number;
}

// Define initial state
export const initialState: FormState = {
  personalInfo: { name: '', email: '', phone: '' },
  step: 1,
};
// Create the reducer function
export const formReducer = createReducer(
  initialState,
  on(setPersonalInfo, (state, { name, email, phone }) => ({
    ...state,
    personalInfo: { name, email, phone },
  })),
  on(setStep, (state, { step }) => ({
    ...state,
    step,
  })),
  
);

export const planReducer = createReducer(
  initialState,
  on(selectPlan, (state, { planName, planPrice, isYearly }) => ({
    ...state,
    selectedPlanName: planName,
    selectedPrice: planPrice,
    isYearly: isYearly,
  })),
  on(togglePricing, (state, { isYearly }) => ({
    ...state,
    isYearly: isYearly,
  }))
);

