import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  private isYearly: boolean = false;

  // Set the plan type (monthly or yearly)
  setPlanType(isYearly: boolean): void {
    this.isYearly = isYearly;
  }

  // Get the current plan type
  getPlanType(): boolean {
    return this.isYearly;
  }}
