// src/app/store/form.actions.ts
import { createAction, props } from '@ngrx/store';

// Action to set personal information
export const setPersonalInfo = createAction(
  '[Form] Set Personal Info',
  props<{ name: string; email: string; phone: string }>()
);

// Action to set the current step
export const setStep = createAction(
  '[Form] Set Step',
  props<{ step: number }>()
);

export const selectPlan = createAction(
  '[Plan] Select Plan',
  props<{ planName: string; planPrice: string; isYearly: boolean }>()
);

export const togglePricing = createAction(
  '[Plan] Toggle Pricing',  
  props<{ isYearly: boolean }>()
);
