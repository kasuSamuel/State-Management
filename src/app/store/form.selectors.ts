// src/app/store/form.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormState, PlanState } from './form.reducer';

// Select the form state
export const selectFormState = createFeatureSelector<FormState>('stepForm');
// Select the form state


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

export const selectPlanState = createFeatureSelector<PlanState>('plan');

export const selectSelectedPlan = createSelector(
  selectPlanState,
  (state: PlanState) => state.selectedPlanName
);

export const selectSelectedPrice = createSelector(
  selectPlanState,
  (state: PlanState) => state.selectedPrice
);

export const selectIsYearly = createSelector(
  selectPlanState,
  (state: PlanState) => state.isYearly
);

