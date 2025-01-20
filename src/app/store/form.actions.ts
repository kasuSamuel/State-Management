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

export const setPlan = createAction(
  '[Form] Set Plan',
  props<{ title: string; monthly: boolean; amount: number }>()
);

export const setPlanStep = createAction(
  '[Form] Set Plan Step',
  props<{ step: number }>()
);