export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export interface FormState {
  personalInfo: PersonalInfo;
  planSelection: string;
  addOns: string[];
  step: number;
}

export const initialState: FormState = {
  personalInfo: { name: '', email: '', phone: '' },
  planSelection: '',
  addOns: [],
  step: 1
};
