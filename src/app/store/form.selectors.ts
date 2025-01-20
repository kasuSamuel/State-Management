// src/app/store/form.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState } from './form.reducer';

// Select the form state
export const selectFormState = createFeatureSelector<FormState>('form');

// Selector to get personal info
export const selectPersonalInfo = createSelector(
  selectFormState,
  (state: FormState) => state.personalInfo
);

// Selector to get the current step
export const selectCurrentStep = createSelector(
  selectFormState,
  (state: FormState) => state.step
);


